import React from 'react';
import {Map, Marker, Polyline, GoogleApiWrapper} from 'google-maps-react';
import {mapStyle} from '../utils/MapStyle.js';
import {Div} from '../elements/divs/Div';
import Autocomplete from 'react-google-autocomplete';
import {Button} from '../elements/buttons/Button';
import {MarkerIcon} from "./Svg/MarkerIcon";
import Test from "./Test";

export class MapContainer extends React.Component {
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
            selectedFromAddress: false
        };
    }

    changedCenter(prevProps, map) {
        let lat = map.center.lat();
        let lng = map.center.lng();

        this.setState({
            latitude: lat,
            longitude: lng,
        });
        console.log(this.state)

        const url = `http://localhost:5000/geocoder/coordinates/${lat}/${lng}`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data.address.split(',')[0]);
            });
    }

    handleSelection() {

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
            let pathCoordinates = [
                {lat: 59.924117, lng: 10.766715},
                {lat: 59.88809, lng: 10.5231},
            ]
            let pathCoordinates2 = [];


            const fromLatLng = `${this.state.fromAddress[0]},${this.state.fromAddress[1]}`
            const toLatLng = `${this.state.toAddress[0]},${this.state.toAddress[1]}`

            const url = `http://localhost:5000/geocoder/geo-json/${fromLatLng}/${toLatLng}`;
            let kek = fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    return data

                });
            console.log(kek)

            console.log(pathCoordinates)
            console.log(pathCoordinates2)
            if (pathCoordinates.length > 1) {
                return (
                    <Polyline
                        path={pathCoordinates}
                        options={{
                            strokeColor: '#00ffff',
                            strokeOpacity: 1,
                            strokeWeight: 2,
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
            height: '100%',
        };


        return (
            <Div>
                <Autocomplete
                    style={{width: '90%'}}
                    onPlaceSelected={(place) => {
                        console.log(place);
                    }}
                    types={[]}
                    componentRestrictions={{country: 'no'}}
                />
                <Map
                    google={this.props.google}
                    initialCenter={{
                        lat: 59.924117,
                        lng: 10.766715,
                    }}
                    onDragend={this.changedCenter.bind(this)}
                    zoom={16}
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
                    <Test data={this.state}/>
                    <MarkerIcon/>
                </Map>
                <Button bottom center onClick={this.handleSelection.bind(this)}>
                    Velg fra
                </Button>
            </Div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBIowGjwaajWBpRnebeFK_K0ut_RUCGYxs',
})(MapContainer);
