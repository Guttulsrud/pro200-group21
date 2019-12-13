let request = require("request");

let url = "https://api.entur.io/realtime/v1/rest/vm/?datasetId=RUT";
request(url, { xml: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    console.log(body);
});





// // data = {
// //     "vehicleRef": "751318",
// //     "line": "70",
// //     "location": {
// //         "long": 59.929750,
// //         "lat": 10.715817
// //     },
// // };
// // optionalData = {
// //     "vehicleRef": "751318",
// //     "provider": "rut",
// //     "line": "70",
// //     "VehicleMode": "bus",
// //     "directionRef": "1",
// //     "location": {
// //         "long": 59.929750,
// //         "lat": 10.715817
// //     },
// //     "progressBetweenStops": 25.54,
// //     "destinationDisplay": "Nationaltheateret",
// //     "originName": "Skullerud",
// //     "originRef": "346346",
// //     "destinationName": "Nationaltheateret",
// //     "destinationRef": "345346",
// // };
