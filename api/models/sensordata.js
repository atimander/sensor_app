/**
 * Created by alexa on 2017-04-28.
 */
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    time: String,
    temperature: String
});

mongoose.model('Sensordata', schema, 'sensordata');