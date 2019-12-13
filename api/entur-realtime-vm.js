const request = require('request');
const fs = require('fs');

function getData(urlParams){
    if (urlParams === undefined) urlParams = '';
    const url = "https://api.entur.io/realtime/v1/rest/vm" + urlParams;
    request.get(url, { json:true }, (error, response, body) => {
        if (error || response.statusCode !== 200) {
            console.log("\nThere was a problem fetching the data from entur..");
            if(response.statusCode === 429) console.log("429 - Too Many Requests ");
            return;
        }
        const listOfInstances = body.Siri.ServiceDelivery.VehicleMonitoringDelivery[0];
        const dataLength = Object.keys(listOfInstances.VehicleActivity).length;

        //This block of code is used to format a json file - keep a safe distance
        let data = "{\n\t\"list\":[";

        for(let i = 0; i < dataLength; i++) {
            if(i !== 0) data+= ",";
            const singleInstance = listOfInstances.VehicleActivity[i].MonitoredVehicleJourney;

            data += "\n\t\t{";
            data += singleInstance.LineRef ? "\n\t\t\t\"id\":\"" + singleInstance.LineRef.value + "\"," : "";
            data += listOfInstances.VehicleActivity[i].RecordedAtTime ? "\n\t\t\t\"recordedAt\":\"" + listOfInstances.VehicleActivity[i].RecordedAtTime + "\",": "";
            data += singleInstance.VehicleLocation.Longitude ?  "\n\t\t\t\"lng\":\"" + singleInstance.VehicleLocation.Longitude + "\"," : "";
            data += singleInstance.VehicleLocation.Latitude ? "\n\t\t\t\"lat\":\"" + singleInstance.VehicleLocation.Latitude + "\",": "";

            if(singleInstance.OperatorRef) {
                if (singleInstance.OperatorRef.value === "Unibuss" || singleInstance.OperatorRef.value === "Nobina" || singleInstance.OperatorRef.value === "Norgesbuss_BærRom" || singleInstance.OperatorRef.value === "Nettbuss" || singleInstance.OperatorRef.value === "Norgesbuss_Oslo" || singleInstance.OperatorRef.value === "Tide_sjø_AS") {
                    type = "bus"
                } else if (singleInstance.OperatorRef.value === "Sporvognsdrift") {
                    type = "tram"
                } else {type = "undefined"}
            }
            //(singleInstance.OperatorRef.value === "Unibuss" || singleInstance.OperatorRef.value === "Nobina" || singleInstance.OperatorRef.value === "Norgesbuss_BærRom" || singleInstance.OperatorRef.value === "Nettbuss" || singleInstance.OperatorRef.value === "Norgesbuss_Oslo"|| singleInstance.OperatorRef.value === "Sporvognsdrift" || singleInstance.OperatorRef.value === "Tide_sjø_AS") ?: console.log(singleInstance.OperatorRef.value)/*singleInstance.OperatorRef.value === "Unibuss" ? "bus" : "tram"*/: "unknown";
            data += "\n\t\t\t\"type\":\"" + type + "\"\n\t\t}";

        }
        data += "\n\t]\n}";
        //End of json formating


        fs.writeFile('allData.json', data, (err) => {
            if (err) throw err;
        });

    });
}

getData();


