const request = require('request');
const fromStop = '';
const toStop = '';
const numberOfTripPatterns = 3;
const fs = require('fs');


const getJourneyPlannerData = (fromStop, toStop, numTrips) => {
    return request.post('https://api.entur.io/journey-planner/v2/graphql', {
        json: {
            "query": "{trip(" +
                "from: {place:\"NSR:StopPlace:58366\"name:\"Jernbanetorget, Oslo\"\n}" +
                "to: {place:\"NSR:StopPlace:385\"name:\"Alna, Oslo\"}" +
                "numTripPatterns: " + numberOfTripPatterns + "" +
                "dateTime: \"2019-12-11T12:33:30.774+01:00\"" +
                "minimumTransferTime: 180 " +
                "walkSpeed: 1.3 " +
                "wheelchair: false arriveBy: false) " +
                "{tripPatterns " +
                "{startTime duration  walkDistance legs " +
                "{mode distance line " +
                "{id publicCode }pointsOnLink {points length }}}}}", "variables": null
        }
    }, (error, res, body) => {
        if (error) {
            console.error(error);
            return;
        }

        let obj = {
            trips: []
        };


        for (let trip of body.data.trip.tripPatterns) {
            obj.trips.push({
                "Start time": trip.startTime,
                "Duration": trip.duration,
                'Walk distance': trip.walkDistance,
                'Legs': trip.legs
            });
        }

        fs.writeFile('tripPatterns.json', JSON.stringify(obj, null, 4), function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    })
};

exports.getJourneyPlannerData = getJourneyPlannerData;