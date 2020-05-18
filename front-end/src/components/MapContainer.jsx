import React from 'react';
import {Map, InfoWindow, GoogleAPI, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lat: 0,
            lng: 0,

        };
    }

    test(e) {
        const newPlace = { id: this.state.places.length  };
        this.setState({
            places: [...this.state.places,newPlace]
        });
    }

    changedCenter(mapProps, map) {


        let lat = map.center.lat();
        let lng = map.center.lng();

        console.log(this);
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
                onCenterChanged={this.test.bind(this)}
                zoom={16}
                style={style}

            >
                <Marker
                    title={'The marker`s title will appear as a tooltip.'}
                    name={'SOMA'}
                    position={this.changedCenter}
                />


            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBIowGjwaajWBpRnebeFK_K0ut_RUCGYxs')
})(MapContainer)



