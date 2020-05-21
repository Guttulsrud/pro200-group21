import React from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';
import {mapStyle} from '../utils/MapStyle.js';

import {Div} from '../elements/divs/Div';


export class LiveMapContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fromAddress: [],
            toAddress: [],
            polylineArray: [],
            selected: false,
            latitude: 0,
            longitude: 0
        };
    }


    onMapLoaded(mapProps, map) {
        map.setOptions({
            styles: mapStyle,
        });

        this.changedCenter(mapProps, map)
    }



    // changedCenter(prevProps, map) {
    //     let lat = map.center.lat();
    //     let lng = map.center.lng();
    //
    // }


    render() {
        const style = {
            width: '100%',
            height: '100%',
        };



        return (
            <Div>
                <Map
                    google={this.props.google}
                    initialCenter={{lat: 59.924117, lng: 10.766715,}}
                    centerAroundCurrentLocation
                    center={{
                        lat: this.state.latitude,
                        lng: this.state.longitude
                    }}
                    zoom={this.state.selected ? 15.3 : 17}
                    style={style}
                    streetViewControl={false}
                    zoomControl={false}
                    fullscreenControl={false}
                    mapTypeControl={false}
                    draggable={true}
                    onReady={this.onMapLoaded.bind(this)}
                >


                </Map>
            </Div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBIowGjwaajWBpRnebeFK_K0ut_RUCGYxs',
})(LiveMapContainer);
