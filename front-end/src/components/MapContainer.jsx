import React from 'react';
import {Map, Marker, Polyline, GoogleApiWrapper} from 'google-maps-react';
import {mapStyle} from '../utils/MapStyle.js';
import {Button} from '../elements/buttons/Button';
import {MyLocationIcon} from './Icons/MyLocationIcon';
import FromSearchField from './FromSearchField';
import {Div} from '../elements/divs/Div';
import {MarkerIcon} from './Icons/MarkerIcon';
import PurchasePage from '../pages/PurchasePage';
import ToSearchField from './ToSearchField';


export class MapContainer extends React.Component {
    busIndex = 0;

    constructor(props) {
        super(props);

        this.state = {
            fromCoordinate: [],
            toCoordinate: [],
            stopCoordinate: [],
            busCoordinate: [],
            selectedFromAddress: false,
            polylineArray: [],
            fromLoc: '',
            toLoc: '',
            address: [],
            selectedToAddress: false,
            orderReady: false,
        };
    }

    componentDidMount() {
        this.showCurrentLocation();
    }

    showCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    myLat: position.coords.latitude,
                    myLng: position.coords.longitude
                });
            });

        } else {
            console.log('GEOLOCATION NOT ACTIVE');
        }
    };

    setAddressFromCoordinates(lat, lng) {
        const url = `http://localhost:5000/geocoder/coordinates/${lat}/${lng}`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                if (!this.state.selectedFromAddress) {
                    this.setState({
                        fromLoc: data.address.split(',')[0],
                        latitude: lat,
                        longitude: lng,
                    });
                } else {
                    this.setState({
                        toLoc: data.address.split(',')[0],
                        latitude: lat,
                        longitude: lng,
                    });
                }

            });
    }


    onMapLoaded(mapProps, map) {
        map.setOptions({
            styles: mapStyle,
        });

        this.changedCenter(mapProps, map);
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
                toCoordinate: [state.latitude, state.longitude],
                selectedToAddress: true,

            });
        } else {
            this.setState({
                selectedFromAddress: true,
                fromCoordinate: [state.latitude, state.longitude],
            });
        }
    }

    renderStartMarker = () => {
        const state = this.state;
        if (state.fromCoordinate) {
            return (
                <Marker
                    position={{lat: state.fromCoordinate[0], lng: state.fromCoordinate[1]}}
                    icon={{
                        url: '/images/pin-48-from.png',
                        anchor: new this.props.google.maps.Point(25, 52),
                        scaledSize: new this.props.google.maps.Size(48, 48)
                    }}
                />
            );
        }

    };

    renderDestinationMarker = () => {
        const state = this.state;
        if (state.toCoordinate) {
            return (
                <Marker
                    icon={{
                        url: '/images/pin-48-to.png',
                        anchor: new this.props.google.maps.Point(25, 52),
                        scaledSize: new this.props.google.maps.Size(48, 48)
                    }}
                    position={{lat: state.toCoordinate[0], lng: state.toCoordinate[1]}}
                />
            );
        }
    };

    renderMiddleMarker = () => {
        const state = this.state;
        if (state.middleAddress) {
            return (
                <Marker
                    icon={{
                        url: '/images/bus-stop-48.png',
                        anchor: new this.props.google.maps.Point(25, 52),
                        scaledSize: new this.props.google.maps.Size(48, 48)
                    }}
                    position={{lat: state.middleAddress[0], lng: state.middleAddress[1]}}
                />
            );
        }
    };
    renderBusMarker = () => {
        const state = this.state;
        if (state.busCoordinate) {
            return (
                <Marker
                    icon={{
                        url: '/images/bus-48.png',
                        anchor: new this.props.google.maps.Point(25, 52),
                        scaledSize: new this.props.google.maps.Size(48, 48)
                    }}
                    position={{lat: state.busCoordinate.lat, lng: state.busCoordinate.lng}}
                />
            );
        }
    };

    animateBus = () => {
        setInterval(this.intervalFunc, 1000);
    };
    intervalFunc = () => {
        if (this.state.polylineArray[this.busIndex]) {
            this.setState({
                    busCoordinate: this.state.polylineArray[this.busIndex]
                }
            );
            this.busIndex++;
        }
    };

    handlePolyline() {
        const state = this.state;

        if (state.toCoordinate.length > 0) {
            if (this.state.polylineArray.length < 1) {
                this.generateRandomTripPolyline();
                this.animateBus();
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

    generateRandomTripPolyline(randomDistanceMultiplier = 0.01) {
        const fromLatLng = `${this.state.fromCoordinate[0]},${this.state.fromCoordinate[1]}`;
        const toLatLng = `${this.state.toCoordinate[0]},${this.state.toCoordinate[1]}`;

        let startLat = parseFloat(fromLatLng.split(',')[0]) + randomDistanceMultiplier * Math.random();
        let startLng = parseFloat(fromLatLng.split(',')[1]) + randomDistanceMultiplier * Math.random();
        let start = startLat + ',' + startLng;

        let middleLat = parseFloat(toLatLng.split(',')[0]) + randomDistanceMultiplier * Math.random();
        let middleLng = parseFloat(toLatLng.split(',')[1]) + randomDistanceMultiplier * Math.random();
        let middle = middleLat + ',' + middleLng;

        const url0 = `http://localhost:5000/geocoder/geo-json/${start}/${fromLatLng}`;
        const url1 = `http://localhost:5000/geocoder/geo-json/${fromLatLng}/${middle}`;
        const url2 = `http://localhost:5000/geocoder/geo-json/${middle}/${toLatLng}`;

        //Has to be nested to make sure all responses are received before concatenation of poly lines
        fetch(url0)
            .then((response) => response.json())
            .then((data0) => {
                fetch(url1)
                    .then((response) => response.json())
                    .then((data1) => {
                        fetch(url2)
                            .then((response) => response.json())
                            .then((data2) => {
                                this.setState({
                                    polylineArray: this.state.polylineArray
                                        .concat(data0)
                                        .concat(data1)
                                        .concat(data2),
                                    receivedPolyLine: true,
                                    polyline0: data0,
                                    polyline1: data1,
                                    polyline2: data2,
                                    middleAddress: [middleLat, middleLng]
                                });
                            });
                    });
            });
    }

    handleOrder = () => {
        this.setState({
            orderReady: true
        });
    };

    handleInputSelect = (inputLat, inputLong) => {
        this.setState({
            latitude: inputLat,
            longitude: inputLong
        });
    };

    handleRemoveFrom = () => {
        this.setState({
            fromLoc: null,
            selectedFromAddress: false,
            fromCoordinate: []
        });
    };

    handleRemoveTo = () => {
        this.setState({
            toLoc: null,
            selectedToAddress: false,
            toCoordinate: []
        });
    };

    render() {

        const style = {
            height: '300px',
        };

        return (
            <Div>
                <Map
                    style={!this.state.orderReady ? null : style}
                    google={this.props.google}
                    initialCenter={{lat: 59.924117, lng: 10.766715,}}
                    centerAroundCurrentLocation
                    center={{
                        lat: this.state.latitude,
                        lng: this.state.longitude
                    }}
                    onDragend={this.changedCenter.bind(this)}
                    zoom={this.state.selectedToAddress ? 15.3 : 17}
                    streetViewControl={false}
                    zoomControl={false}
                    fullscreenControl={false}
                    mapTypeControl={false}
                    draggable={true}
                    onReady={this.onMapLoaded.bind(this)}
                >
                    {!this.state.orderReady && <FromSearchField
                        fromLoc={this.state.fromLoc}
                        fromSelected={this.state.selectedFromAddress}
                        handleInputSelect={this.handleInputSelect}
                        handleRemoveFrom={this.handleRemoveFrom}
                    />}

                    {(!this.state.orderReady && this.state.selectedFromAddress) && <ToSearchField
                        toLoc={this.state.toLoc}
                        handleInputSelect={this.handleInputSelect}
                        handleRemoveTo={this.handleRemoveTo}
                    />}
                    {!this.state.orderReady && <MyLocationIcon showCurrentLocation={this.showCurrentLocation}/>}

                    <Marker
                        id='position-marker'
                        icon={{

                            path: this.props.google.maps.SymbolPath.CIRCLE,
                            fillColor: '#CCEAE4',
                            fillOpacity: 1,
                            scale: 10,
                            strokeColor: '#003A70',
                            strokeWeight: 8,
                        }}
                        position={{lat: this.state.myLat, lng: this.state.myLng}}
                    />


                    {this.renderStartMarker()}
                    {this.renderMiddleMarker()}
                    {this.renderDestinationMarker()}
                    {this.renderBusMarker()}
                    {this.handlePolyline()}
                    {(!this.state.selectedToAddress && this.props.orderMap) &&
                    <MarkerIcon toLoc={this.state.selectedFromAddress}/>}

                </Map>
                {this.state.orderReady && <PurchasePage/>}

                {!this.state.orderReady &&
                <Div paddingTop='30px'>
                    <Button
                        width='70%'
                        bottom
                        center
                        onClick={!this.state.selectedToAddress ? this.handleSelection.bind(this) : this.handleOrder}
                    >
                        {!this.state.selectedFromAddress ? 'Hent meg her' : this.state.selectedToAddress ? 'Bestill' : 'Jeg skal hit'}
                    </Button>
                </Div>
                }
            </Div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBIowGjwaajWBpRnebeFK_K0ut_RUCGYxs',
})(MapContainer);
