const tf = require('@tensorflow/tfjs');
const { type } = require('os');


const createModel=()=>{
  const model = tf.sequential(); 
  
  model.add(tf.layers.dense({inputShape: [7], units: 7, useBias: true}));
  model.add(tf.layers.dense({inputShape:[7],units: 20, activation: 'sigmoid',useBias:true}));
  model.add(tf.layers.dense({inputShape:[20],units: 20,useBias:true}));
  model.add(tf.layers.dense({inputShape:[20],units: 1,useBias:true}));

  return model;
};

const convertToTensor=(data)=>{
  
  return tf.tidy(() => {
    tf.util.shuffle(data);

    const inputs = data.map(d => [
        d.openness,
        d.honesty,
        d.agreeableness,
        d.altruism,
        d.conscientiousness,
        d.emotionality,
        d.extraversion])
    const labels = data.map(d => d.days);

    const inputTensor = tf.tensor2d(inputs, [inputs.length, 7]);
    const labelTensor = tf.tensor2d(labels, [labels.length, 1]);

    const inputMax = inputTensor.max();
    const inputMin = inputTensor.min();  
    const labelMax = labelTensor.max();
    const labelMin = labelTensor.min();

    const normalizedInputs = inputTensor.sub(inputMin).div(inputMax.sub(inputMin));
    const normalizedLabels = labelTensor.sub(labelMin).div(labelMax.sub(labelMin));

    return {
      inputs: normalizedInputs,
      labels: normalizedLabels,
      inputMax,
      inputMin,
      labelMax,
      labelMin,
    }
  });  
};

async function trainModel(model, inputs, labels) {
    model.compile({
      optimizer: tf.train.adam(),
      loss: tf.losses.meanSquaredError,
      metrics: ['mse'],
    });
    
    const batchSize = 32;
    const epochs = 100;
    
    return await model.fit(inputs, labels, {
      batchSize,
      epochs,
      shuffle: true,
      callbacks: ()=>{
          console.info('Training...');
      }
    });
  }

  const testModel = (model, normalizationData,value) => {
    const {inputMax, inputMin, labelMin, labelMax} = normalizationData;  
  
    const preds = tf.tidy(() => {
      const tensorToPred= tf.tensor2d(value,[1,7]);
      const normalizedTensorToPred = tensorToPred.sub(inputMin).div(inputMax.sub(inputMin));
      const pred = model.predict(normalizedTensorToPred);      
      
      const unNormPred = pred
        .mul(labelMax.sub(labelMin))
        .add(labelMin);
      
      return unNormPred.dataSync();
    });
    return preds;
  }

const train = async (data,userpts)=>{
    const cleanedData = data.data.map((char)=>({
        openness: char["openness-to-experience"],
        honesty:char["honesty-humility"],
        agreeableness:char.agreeableness,
        altruism:char.altruism,
        conscientiousness:char.conscientiousness,
        emotionality:char.emotionality,
        extraversion:char.extraversion,
        days: char.days,

    })).filter(char =>(
        char.openness &&
        char.honesty &&
        char.agreeableness &&
        char.altruism &&
        char.conscientiousness  &&
        char.emotionality &&
        char.extraversion  &&
        char.days 
        ));
    const model = createModel();
    const tensorData = convertToTensor(cleanedData);
    const {inputs, labels} = tensorData;

    await trainModel(model,inputs,labels);
    
    const pred = testModel(model,tensorData,userpts);

    return Object.values(pred)[0];
};


module.exports = train;

