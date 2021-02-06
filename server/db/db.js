const mongoose=require('mongoose');

mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PSSWD}@${process.env.DB_IP}:27017/${process.env.DB_NAME}`,{useNewUrlParser:true,useUnifiedTopology:true});

const dbConnection = mongoose.connection;
dbConnection.on('error', console.error.bind(console,'connection error:'));
dbConnection.once('open',()=>{
    console.info('MongoDB connected');
});

module.exports = dbConnection;