import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import PinIcon from '../images/pin.png';
import { MarkerIcon } from '../components/Svg/MarkerIcon'
import { mapStyle } from '../utils/MapStyle.js'
import { Div } from '../elements/divs/Div';

export class MapContainer extends React.Component {
    _mapLoaded(mapProps, map) {
        map.setOptions({
            styles: mapStyle
        })
    }

    render() {

        const style = {
            width: '100%',
            height: '100%'
        }
        return (
            <Map
                google={this.props.google}
                center={new this.props.google.maps.LatLng(this.latitude, this.longitude)}
                zoom={14}
                style={style}
                streetViewControl={false}
                zoomControl={false}
                fullscreenControl={false}
                mapTypeControl={false}
                draggable={true}
                onReady={(mapProps, map) => this._mapLoaded(mapProps, map)}
            >


                <MarkerIcon />



            </Map >

        )
    }
}
export default GoogleApiWrapper({
    apiKey: ('AIzaSyBIowGjwaajWBpRnebeFK_K0ut_RUCGYxs')
})(MapContainer)



