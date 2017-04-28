/**
 * Created by alexa on 2017-04-28.
 */
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    time: Date,
    temperature: Number,
    humidity: Number,
    light: Number,
    pir: Number
});

mongoose.model('Sensordata', schema, 'sensordata');