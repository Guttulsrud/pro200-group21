import React from 'react';
import {Map, Marker, Polyline, GoogleApiWrapper} from 'google-maps-react';
import {mapStyle} from '../utils/MapStyle.js';
import {Button} from '../elements/buttons/Button';
import {MyLocationIcon} from './Icons/MyLocationIcon';
import SearchField from './SearchField';
import {Div} from '../elements/divs/Div';
import {MarkerIcon} from './Icons/MarkerIcon';

export class MapContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fromAddress: [],
            toAddress: [],
            selectedFromAddress: false,
            polylineArray: [],
            fromLoc: '',
            address: [],
            selected: false,
            latitude: 0,
            longitude: 0
        };
    }

    showCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            })

        } else {
            console.log("GEOLOCATION NOT ACTIVE")
        }
    }

    setAddressFromCoordinates(lat, lng) {
        const url = `http://localhost:5000/geocoder/coordinates/${lat}/${lng}`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    fromLoc: data.address.split(',')[0],
                    latitude: lat,
                    longitude: lng,
                });
            });
    }


    onMapLoaded(mapProps, map) {
        map.setOptions({
            styles: mapStyle,
        });

        this.changedCenter(mapProps, map)
    }


    changedCenter(prevProps, map) {
        let lat = map.center.lat();
        let lng = map.center.lng();

        this.setAddressFromCoordinates(lat, lng);
    }

    handleSelection() {
        const state = this.state;
        if (state.selectedFromAddress) {
            this.setState({
                toAddress: [state.latitude, state.longitude],
                selected: true,
                fromLoc: '',
            });
        } else {
            this.setState({
                selectedFromAddress: true,
                fromAddress: [state.latitude, state.longitude],
                fromLoc: '',
            });
        }
    }

    renderStartMarker = () => {
        const state = this.state;

        if (state.fromAddress) {
            return (
                <Marker
                    position={{lat: state.fromAddress[0], lng: state.fromAddress[1]}}
                />
            );
        }

    };

    renderDestinationMarker = () => {
        const state = this.state;

        if (state.toAddress) {
            return (
                <Marker
                    position={{lat: state.toAddress[0], lng: state.toAddress[1]}}
                />
            );
        }
    };

    renderPolyLine = () => {
        const state = this.state;

        if (state.toAddress.length > 0) {
            if (this.state.polylineArray.length < 1) {
                const fromLatLng = `${this.state.fromAddress[0]},${this.state.fromAddress[1]}`;
                const toLatLng = `${this.state.toAddress[0]},${this.state.toAddress[1]}`;

                const url = `http://localhost:5000/geocoder/geo-json/${fromLatLng}/${toLatLng}`;
                fetch(url)
                    .then((response) => response.json())
                    .then((data) => {
                        this.setState({
                            polylineArray: data,
                            receivedPolyLine: true,
                        });
                    });
            }

            if (this.state.receivedPolyLine) {
                return (
                    <Polyline
                        path={this.state.polylineArray}
                        options={{
                            strokeColor: '#003A70',
                            strokeOpacity: 1,
                            strokeWeight: 5,
                            icons: [
                                {
                                    offset: '0',
                                    repeat: '10px',
                                },
                            ],
                        }}
                    />
                );
            }
        }
    };

    render() {
        const style = {
            width: '100%',
            height: '100%',
        };

        let mapCanBeDragged = this.state.selected;

        console.log('MCBD ' + mapCanBeDragged);
        console.log('SELECTED: ' + this.state.selected);

        return (
            <Div>
                <Map
                    google={this.props.google}
                    centerAroundCurrentLocation
                    center={{
                        lat: this.state.latitude,
                        lng: this.state.longitude
                    }}
                    onDragend={this.changedCenter.bind(this)}
                    zoom={this.state.selected ? 15.3 : 17}
                    style={style}
                    streetViewControl={false}
                    zoomControl={false}
                    fullscreenControl={false}
                    mapTypeControl={false}
                    draggable={true}
                    onReady={this.onMapLoaded.bind(this)}
                >
                    <SearchField
                        location={this.state.fromLoc}
                        fromSelected={this.state.selectedFromAddress}
                    />
                    <MyLocationIcon showCurrentLocation={this.showCurrentLocation} />

                    {this.renderStartMarker()}
                    {this.renderDestinationMarker()}
                    {this.renderPolyLine()}
                    {!this.state.selected && <MarkerIcon/>}


                </Map>
                <Div paddingTop='30px'>
                    <Button
                        width='70%'
                        inactive={!this.state.fromLoc || this.state.selected}
                        outlineBlue={!this.state.fromLoc || this.state.selected}
                        bottom
                        center
                        onClick={!this.state.selected && this.state.fromLoc ? this.handleSelection.bind(this) : null}
                    >
                        {this.state.selectedFromAddress ? 'Velg til' : 'Velg fra'}
                    </Button>
                </Div>
            </Div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBIowGjwaajWBpRnebeFK_K0ut_RUCGYxs',
})(MapContainer);
