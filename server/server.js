require('dotenv').config()
const express = require('express');
const app = express();
require('./db/db');

app.use(express.json());

app.use('/api/analysis',require('./routes/analysis/company'));


app.listen(5000,()=>{
    console.info('Long-lasting Teams server started');
});