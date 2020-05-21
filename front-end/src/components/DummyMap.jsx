import React from 'react';
import {Map, Marker, Polyline, GoogleApiWrapper} from 'google-maps-react';
import {mapStyle} from '../utils/MapStyle.js';
import Autocomplete from 'react-google-autocomplete';
import {Button} from '../elements/buttons/Button';
// import { MyLocationIcon } from '../components/Icons/MyLocationIcon';
import SearchField from './SearchField';
import {Div} from "../elements/divs/Div";
import {MarkerIcon} from "./Icons/MarkerIcon";

export class DummyMap extends React.Component {
    _mapLoaded(mapProps, map) {
        map.setOptions({
            styles: mapStyle,
        });
    }

    constructor(props) {
        super(props);

        this.state = {
            fromAddress: [],
            toAddress: [],
            selectedFromAddress: false,
            test: [],
            fromLoc: '',
            address: [],

        };
    }

    changedCenter(prevProps, map) {
        let lat = map.center.lat();
        let lng = map.center.lng();

        this.setState({
            latitude: lat,
            longitude: lng,
        });

        const url = `http://localhost:5000/geocoder/coordinates/${lat}/${lng}`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    fromLoc: data.address.split(',')[0]
                })

            });
    }

    handleSelection() {

        console.log("hello btton")
        const state = this.state
        if (state.selectedFromAddress) {
            this.setState({
                toAddress: [state.latitude, state.longitude]
            });
        } else {
            this.setState({
                selectedFromAddress: true,
                fromAddress: [state.latitude, state.longitude],
            });
        }
    }

    renderStartMarker = () => {
        const state = this.state

        return (
            <Marker position={{lat: state.fromAddress[0], lng: state.fromAddress[1]}}/>
        )


    };


    renderDestinationMarker = () => {
        const state = this.state

        if (state.toAddress) {
            return (
                <Marker position={{lat: state.toAddress[0], lng: state.toAddress[1]}}/>
            )
        }
    };

    renderPolyLine = () => {
        const state = this.state

        if (state.toAddress.length > 0) {

            if (this.state.test.length < 1) {
                const fromLatLng = `${this.state.fromAddress[0]},${this.state.fromAddress[1]}`
                const toLatLng = `${this.state.toAddress[0]},${this.state.toAddress[1]}`

                const url = `http://localhost:5000/geocoder/geo-json/${fromLatLng}/${toLatLng}`;
                fetch(url)
                    .then((response) => response.json())
                    .then((data) => {
                        this.setState({
                            test: data,
                            cheating: true,
                        })

                    });
            }



            if (this.state.cheating) {

                return (
                    <Polyline
                        path={this.state.test}
                        options={{
                            strokeColor: '#00ffff',
                            strokeOpacity: 1,
                            strokeWeight: 5,
                            icons: [{
                                offset: '0',
                                repeat: '10px'
                            }],
                        }}
                    />
                )
            }
        }
    };

    render() {
        const style = {
            width: '100%',
            height: '60%',
        };


        return (
          <Div display="flex">
          
          
                <Map
                    google={this.props.google}
                    initialCenter={{
                        lat: 59.924117,
                        lng: 10.766715,
                    }}
                    onDragend={this.changedCenter.bind(this)}
                    zoom={15}
                    style={style}
                    streetViewControl={false}
                    zoomControl={false}
                    fullscreenControl={false}
                    mapTypeControl={false}
                    draggable={true}
                    onReady={(mapProps, map) => this._mapLoaded(mapProps, map)}
                >
                    

                    {this.renderStartMarker()}
                    {this.renderDestinationMarker()}
                    {this.renderPolyLine()}
                    
                </Map>
                </Div>
                
            
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBIowGjwaajWBpRnebeFK_K0ut_RUCGYxs',
})(DummyMap);
