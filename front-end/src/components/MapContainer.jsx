import React from 'react';
import {Map, InfoWindow, GoogleAPI, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {

    state = {
        address: []
    };


    changedCenter(mapProps, map) {

        let lat = map.center.lat();
        let lng = map.center.lng();

        const url = `http://localhost:5000/geocoder/coordinates/${lat}/${lng}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data.address.split(',')[0])
            });
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
                onDragend={this.changedCenter}
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



