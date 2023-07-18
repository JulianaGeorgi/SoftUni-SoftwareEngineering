const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

app.use(express.json());

// app.use(express.urlencoded({extended:false})); // parsing the data from the request and putting in an object in req.body
app.use(routes);

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/99lives');

app.listen(5000, () => console.log('Server is running on port 5000...'));