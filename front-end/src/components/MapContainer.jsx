import React from 'react';
import {Map, InfoWindow, GoogleAPI, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {

    async fetchTickets() {
        const url =
            'http://localhost:5000/ticket-instance/user/5debe43e033f2330fc179981';

        let response;
        let payload;

        try {
            response = await fetch(url);
            payload = await response.json();
        } catch (err) {
            this.setState({
                error: 'ERROR when retrieving list of tickets: ' + err,
                tickets: null,
            });
            return;
        }

        if (response.status === 200) {
            this.setState({
                error: null,
                tickets: payload,
            });
        } else {
            this.setState({
                error: 'Issue with HTTP connection: status code ' + response.status,
                tickets: null,
            });
        }
    }


    changedCenter(mapProps, map) {

        let lat = map.center.lat();
        let lng = map.center.lng();





        console.log(lat);
        console.log(lng);
    }

    render() {
        const style = {
            width: '100%',
            height: '100%'
        };
        return (
            <Map
                google={this.props.google}
                initialCenter={{
                    lat: 59.926250,
                    lng: 10.771306
                }}
                onCenterChanged={this.changedCenter}
                zoom={16}
                style={style}
            >
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBIowGjwaajWBpRnebeFK_K0ut_RUCGYxs')
})(MapContainer)



