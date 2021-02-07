const tf = require('@tensorflow/tfjs');


const createModel=()=>{
    // Create a sequential model
  const model = tf.sequential(); 
  
  // Add a single input layer
  model.add(tf.layers.dense({inputShape: [7], units: 7, useBias: true}));
  model.add(tf.layers.dense({inputShape:[7],units: 20, activation: 'sigmoid',useBias:true}));
  model.add(tf.layers.dense({inputShape:[20],units: 20,useBias:true}));
  // Add an output layer
  model.add(tf.layers.dense({inputShape:[20],units: 1,useBias:true}));

  return model;
};

const convertToTensor=(data)=>{
    // Wrapping these calculations in a tidy will dispose any 
  // intermediate tensors.
  
  return tf.tidy(() => {
    // Step 1. Shuffle the data    
    tf.util.shuffle(data);

    // Step 2. Convert data to Tensor
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

    //Step 3. Normalize the data to the range 0 - 1 using min-max scaling
    const inputMax = inputTensor.max();
    const inputMin = inputTensor.min();  
    const labelMax = labelTensor.max();
    const labelMin = labelTensor.min();

    const normalizedInputs = inputTensor.sub(inputMin).div(inputMax.sub(inputMin));
    const normalizedLabels = labelTensor.sub(labelMin).div(labelMax.sub(labelMin));

    return {
      inputs: normalizedInputs,
      labels: normalizedLabels,
      // Return the min/max bounds so we can use them later.
      inputMax,
      inputMin,
      labelMax,
      labelMin,
    }
  });  
};

async function trainModel(model, inputs, labels) {
    // Prepare the model for training.  
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
          console.log('Training...');
      }
    });
  }

  const testModel = (model, normalizationData,value) => {
    const {inputMax, inputMin, labelMin, labelMax} = normalizationData;  
    
    // Generate predictions for a uniform range of numbers between 0 and 1;
    // We un-normalize the data by doing the inverse of the min-max scaling 
    // that we did earlier.
    const preds = tf.tidy(() => {
      const tensorToPred= tf.tensor2d(value,[1,7]);
      const normalizedTensorToPred = tensorToPred.sub(inputMin).div(inputMax.sub(inputMin));
      const pred = model.predict(normalizedTensorToPred);      
      
      const unNormPred = pred
        .mul(labelMax.sub(labelMin))
        .add(labelMin);
      
      // Un-normalize the data
      return unNormPred.dataSync();
    });
    return preds;
  }

const train = async (data)=>{
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

    console.log(cleanedData);
    const model = createModel();
    const tensorData = convertToTensor(cleanedData);
    const {inputs, labels} = tensorData;

    await trainModel(model,inputs,labels);
    
    const pred = testModel(model,tensorData,[4.06,
        3.63,
        3.44,
        3.75,
        3.88,
        3.94,
        3.94]);

    console.log('Prediction: ',pred);
   
};


module.exports = train;

