const express = require('express');
const handlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const routes = require('./routes.js');
const { authentication } = require('./middleware/autheticationMiddleware.js');

const app = express();

app.engine('hbs', handlebars.engine({ // add view engine
    extname: 'hbs',
}));

app.set('view engine', 'hbs'); // views -> layouts -> main -> REPLACE THE MAIN

app.use('/static', express.static('static')); // REPLACE ASSETS IN THE FOLDER
app.use(express.urlencoded({ extended: false })); // body parser -> to parse the data from the forms => req.body
app.use(cookieParser());
app.use(authentication);
app.use(routes);

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/crypto'); // CHANGE DB NAME

app.listen(5000, () => console.log("Server is running on port 5000..."));