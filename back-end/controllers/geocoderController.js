const https = require("https");
const polyliner = require('@mapbox/polyline');


exports.getLocationByQueryName = function (req, res) {

    const address = req.params.address;

    https.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyC93fBd5s_Vx9jm77c4fD-zI57hicOXuts`, function(result) {
        let body = '';
        result.on("data", function(chunk) {
            body += chunk;
        });
        result.on('end', function() {
            const bodyAsJSON = JSON.parse(body);
            const formattedResponse = {
                full_address: bodyAsJSON.results[0].formatted_address,
                lat: bodyAsJSON.results[0].geometry.location.lat,
                long: bodyAsJSON.results[0].geometry.location.lng,
            }
           res.send(formattedResponse);
        });
    }).on('error', function(e) {
        res.send(e.message);
    });
};

exports.getGeoJson = function (req, res) {
    const from = req.params.from;
    const to = req.params.to;


    https.get(`https://maps.googleapis.com/maps/api/directions/json?origin=${from}&destination=${to}&key=AIzaSyAtfuvxG4aNKFr8VNrR4L97BgSpwdhLEG0`, function(result) {
        let body = '';
        result.on("data", function(chunk) {
            body += chunk;
        });
        result.on('end', function() {
            const bodyAsJSON = JSON.parse(body);
            const polylineResponse = bodyAsJSON.routes[0].overview_polyline.points;
            const polyJSON = polyliner.decode(polylineResponse);

            res.send(polyJSON);

        });
    }).on('error', function(e) {
        res.send(e.message);
    });


}
