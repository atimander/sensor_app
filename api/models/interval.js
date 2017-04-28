/**
 * Created by alexa on 2017-04-28.
 */
setInterval(function() {
    console.log('Kör intervall!');

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
}, 300000);