import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends React.Component {

    render() {
        const style = {
            width: '100%',
            height: '100%'
        }
        return (
            <Map
                google={this.props.google}
                initialCenter={{
                    lat: 40.854885,
                    lng: -88.081807
                }}
                zoom={14}
                style={style}
            >

                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />


            </Map>
        )
    }
}
export default GoogleApiWrapper({
    apiKey: ('AIzaSyBIowGjwaajWBpRnebeFK_K0ut_RUCGYxs')
})(MapContainer)



