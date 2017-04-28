var mongoose = require('mongoose');
var Sensordata = mongoose.model('Sensordata');
var request = require("request");

module.exports.getData = function (req, res) {
    Sensordata.find().exec(function (err, data) {
        if (err) return res.send(err);
        res.json(data);
    });

};


module.exports.addData = function (req, res) {

    var serverBaseURL = "https://webservice.informatik.umu.se/loraserver/api.php/sensor/";
    var sensorid = "a81758fffe03050a";
    var requestURL = serverBaseURL + sensorid + "/all";

    request.get(requestURL, function (err, body) {
        if (!err) {
            var resultsObj = JSON.parse(body);
            console.log(resultsObj);
        }

        resultsObj.forEach(function (d) {
            new Sensordata({
                time: d.time,
                temperature: d.temperature
            }).save(function (err, data) {
                if (!err) {
                    res.json({message: 'Data inlagd!' + data.time})
                }
            })
        })
    });
};