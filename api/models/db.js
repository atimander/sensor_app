var mongoose = require('mongoose');
require('./sensordata');

var dbURI = 'mongodb://localhost/sensordata';
mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
    console.log('Mongoose är ansluten till ' + dbURI);
});

mongoose.connection.on('error', function () {
    console.log('Mongoose har anslutningsfel till ' + dbURI);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose är inte längre ansluten till ' + dbURI);
});