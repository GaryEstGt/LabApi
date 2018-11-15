const express = require('express');
const bodyParser = require('body-parser');
const pizza = require('./routes/pizzaRoute'); // Imports routes for the products
// initialize express app
const Index = express();
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://gary:holagary30@ds231720.mlab.com:31720/pizzaslabapi';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
Index.use(bodyParser.json());
Index.use(bodyParser.urlencoded({extended: false}));
Index.use('/Pizza', pizza);
let port = 1234;

Index.listen(port, () => {
    console.log('Servidor Iniciado en el puerto: n' + port);
});