import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import PinIcon from '../images/pin.png';
import {MarkerIcon} from './Svg/MarkerIcon'
import {mapStyle} from '../utils/MapStyle.js'
import {Div} from '../elements/divs/Div';
import Autocomplete from 'react-google-autocomplete';
import {Button} from "../elements/buttons/Button";

export class MapContainer extends React.Component {
    _mapLoaded(mapProps, map) {
        map.setOptions({
            styles: mapStyle
        })
    }

    state = {
        address: [],
        numChildren: 0
    };


    changedCenter(prevProps, map) {
        // let welcome = React.createElement(
        //     "h1",
        //     {style: {color: "red"}},
        //     'Welcome to react world'
        // );
        //
        // ReactDOM.render(welcome, document.querySelector("#map"));

        let lat = map.center.lat();
        let lng = map.center.lng();


        console.log(this)

        const url = `http://localhost:5000/geocoder/coordinates/${lat}/${lng}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data.address.split(',')[0])
            });


    }

    render() {
        const children = [];

        const style = {
            width: '100%',
            height: '100%'
        }
        return (

            <>
                <Autocomplete
                    style={{width: '90%'}}
                    onPlaceSelected={(place) => {
                        console.log(place);
                    }}
                    types={[]}
                    componentRestrictions={{country: "no"}}
                />
                <Map

                    google={this.props.google}
                    initialCenter={{
                        lat: 59.924117,
                        lng: 10.766715
                    }}
                    onDragend={this.changedCenter.bind(this)}
                    zoom={14}
                    style={style}
                    streetViewControl={false}
                    zoomControl={false}
                    fullscreenControl={false}
                    mapTypeControl={false}
                    draggable={true}
                    onReady={(mapProps, map) => this._mapLoaded(mapProps, map)}
                >

                    {children}

                    <MarkerIcon/>


                </Map>
                <Button bottom center onClick={this.addChild}>Velg fra</Button>

            </>
        )

    }

    onAddChild = () => {
        this.setState({
            numChildren: this.state.numChildren + 1
        });
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBIowGjwaajWBpRnebeFK_K0ut_RUCGYxs')
})(MapContainer)



