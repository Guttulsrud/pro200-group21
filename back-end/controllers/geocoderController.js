const https = require("https");
const polyliner = require('@mapbox/polyline');


exports.getLocationByQueryName = function (req, res) {

    const address = req.params.address;

    https.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyC93fBd5s_Vx9jm77c4fD-zI57hicOXuts`, function (result) {
        let body = '';
        result.on("data", function (chunk) {
            body += chunk;
        });
        result.on('end', function () {
            const bodyAsJSON = JSON.parse(body);

            if (bodyAsJSON.status === "ZERO_RESULTS") {
                res.send("404 NOT FOUND");
            } else {
                let address = bodyAsJSON.results[0].formatted_address.split(',')[0]
                let full_address = bodyAsJSON.results[0].formatted_address
                const formattedResponse = {
                    address: address,
                    full_address: full_address,
                    lat: bodyAsJSON.results[0].geometry.location.lat,
                    long: bodyAsJSON.results[0].geometry.location.lng,
                }
                res.send(formattedResponse);
            }
        });
    }).on('error', function (e) {
        res.send(e.message);
    });
};


exports.getGeoJson = function (req, res) {
    const from = req.params.from;
    const to = req.params.to;


    https.get(`https://maps.googleapis.com/maps/api/directions/json?origin=${from}&destination=${to}&key=AIzaSyAtfuvxG4aNKFr8VNrR4L97BgSpwdhLEG0`, function (result) {
        let body = '';
        result.on("data", function (chunk) {
            body += chunk;
        });
        result.on('end', function () {
            const bodyAsJSON = JSON.parse(body);
            if (bodyAsJSON.status === "OK") {
                const polylineResponse = bodyAsJSON.routes[0].overview_polyline.points;
                const polyJSON = polyliner.decode(polylineResponse);


                let arr = []

                for (let val of polyJSON) {

                    let temp = val.toString().split(',')

                    arr.push({
                        'lat': parseFloat(temp[0]),
                        'lng': parseFloat(temp[1])

                    })

                }
                res.send(arr);
            } else {
                res.send("404 NOT FOUND");
            }
        });
    }).on('error', function (e) {
        res.send(e.message);
    });
}

exports.getLocationNameByCoordinates = function (req, res) {

    const lat = req.params.lat;
    const lng = req.params.lng;

    // res.send({address: "Tormodsvei 16, 0551 Oslo"})
    https.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyC93fBd5s_Vx9jm77c4fD-zI57hicOXuts`, function (result) {
        let body = '';
        result.on("data", function (chunk) {
            body += chunk;
        });
        result.on('end', function () {
            const bodyAsJSON = JSON.parse(body);

            const address = bodyAsJSON.results[0].formatted_address;

            if (bodyAsJSON.status === "OK") {
                res.send({
                    "address": address
                });
            } else {
                res.send("404 NOT FOUND");
            }
        });
    }).on('error', function (e) {
        res.send(e.message);
    });
}