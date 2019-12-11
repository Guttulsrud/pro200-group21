const request = require('request');
const fs = require('fs');

function getData(url){
    url = "https://api.entur.io/realtime/v1/rest/vm" + url;
    request(url, { json:true },
        (error, response, body) => {
            if (error || response.statusCode !== 200) {
                return;
            }
            const info = body.Siri.ServiceDelivery.VehicleMonitoringDelivery[0].VehicleActivity[0].MonitoredVehicleJourney;

            const data =
                "{\n\t\"id\":\"" + info.LineRef.value +
                "\",\n\t\"lng\":\"" + info.VehicleLocation.Longitude +
                "\",\n\t\"lat\":\"" + info.VehicleLocation.Latitude +
                "\"\n}";


            fs.writeFile('data.json', data, (err) => {
                if (err) throw err;

                console.log('data saved!');
            });

        });
}

getData('?maxSize=10&requestorId=70');

//module.exports =

