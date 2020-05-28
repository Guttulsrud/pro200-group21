import React from 'react';
import {Map, Marker, Polyline, GoogleApiWrapper} from 'google-maps-react';
import {mapStyle} from '../utils/MapStyle.js';
import {Button} from '../elements/buttons/Button';
import {MyLocationIcon} from './Icons/MyLocationIcon';
import {Div} from '../elements/divs/Div';
import {MarkerIcon} from './Icons/MarkerIcon';
import PurchasePage from '../pages/PurchasePage';


export class DummyMap extends React.Component {
    busIndex = 0;

    constructor(props) {
        super(props);

        this.state = {
            fromCoordinate: [0, 0],
            toCoordinate: [0, 0],
            stopCoordinate: [],
            busCoordinate: [],
            selectedFromAddress: false,
            polylineArray: [],
            fromLoc: '',
            address: [],
            selected: true,
            orderReady: false,
            animateBus: false,
            ticketId: props.ticketId
        };
    }

    componentDidMount() {
        this.getTicketFromId();
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
                this.setState({
                    fromLoc: data.address.split(',')[0],
                    latitude: lat,
                    longitude: lng,
                });
            });
    }

    getTicketFromId() {
        let id = this.state.ticketId;
        const url = `http://localhost:5000/ticket/details/${id}`;

        fetch(url)
            .then((response) => response.json())
            .then((ticket) => {
                this.setState({
                    fromCoordinate: ticket.route.origin.coordinates,
                    toCoordinate: ticket.route.destination.coordinates
                });
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
        setInterval(this.intervalFunc, 2000);
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
                // this.generateRandomTripPolyline()
                setTimeout(this.generateRandomTripPolyline.bind(this), 1000);

            }
            if (this.state.animateBus) {
                setTimeout(this.animateBus, 1000);
                this.setState({
                    animateBus: false
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

    generateRandomTripPolyline() {
        // TODO : Finn raskeste rute imellom punktene
        // TODO : Spør backend om veibeskrivelese i riktig rekkefølge
        const fromLatLng = `${this.state.fromCoordinate[0]},${this.state.fromCoordinate[1]}`;
        const destinationLatLng = `${this.state.toCoordinate[0]},${this.state.toCoordinate[1]}`;

        const fromLatitude = parseFloat(fromLatLng.split(',')[0]);
        const fromLongitude = parseFloat(fromLatLng.split(',')[1]);
        const destinationLatitude = parseFloat(destinationLatLng.split(',')[0]);
        const destinationLongitude = parseFloat(destinationLatLng.split(',')[1]);

        const xLength = fromLatitude - destinationLatitude;
        const yLength = fromLongitude - destinationLongitude;

        const distanceToTravel = Math.sqrt(Math.pow(xLength, 2) + Math.pow(yLength, 2));
        const randomDistanceMultiplier = distanceToTravel * 0.05;
        // let numberOfStops = (distanceToTravel * 50 | 0) + 1
        // numberOfStops = numberOfStops > 10 ? 10 : numberOfStops;
        const numberOfStops = 2;

        const startLat = fromLatitude + randomDistanceMultiplier * Math.random();
        const startLng = fromLongitude + randomDistanceMultiplier * Math.random();
        const start = startLat + ',' + startLng;

        let middleLat;
        let middleLng;

        let points = [];
        points.push(start);
        points.push(fromLatLng);
        for (let i = 1; i < numberOfStops; i++) {

            const pointLat = (fromLatitude - xLength * i / numberOfStops)
                + randomDistanceMultiplier * this.getDeviation(i, numberOfStops)
                * Math.random()
                * (Math.random() < 0.5 ? -1 : 1);
            const pointLng = (fromLongitude - yLength * i / numberOfStops)
                + randomDistanceMultiplier * this.getDeviation(i, numberOfStops)
                * Math.random()
                * (Math.random() < 0.5 ? -1 : 1);

            middleLat = pointLat;
            middleLng = pointLng;

            points.push(`${pointLat},${pointLng}`);
        }
        points.push(destinationLatLng);

        let url = [];
        for (let i = 0; i < points.length - 1; i++) {
            url.push(`http://localhost:5000/geocoder/geo-json/${points[i]}/${points[i + 1]}`);
        }

        //Has to be nested to make sure all responses are received before concatenation of poly lines
        fetch(url[0])
            .then((response) => response.json())
            .then((data0) => {
                fetch(url[1])
                    .then((response) => response.json())
                    .then((data1) => {
                        fetch(url[2])
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
                                    middleAddress: [middleLat, middleLng],
                                    points: points,
                                    animateBus: true
                                });
                            });
                    });
            });

    }

    getDeviation(x, len) {
        return -(Math.pow(x, 2) / len) + x;
    }

    render() {

        const style = {
            height: '23em',


        };

        return (
            <Div>
                <Map
                    style={style}
                    google={this.props.google}
                    initialCenter={{lat: 59.924117, lng: 10.766715,}}
                    centerAroundCurrentLocation
                    // center={{
                    //     lat: this.state.fromCoordinate[0],
                    //     lng: this.state.fromCoordinate[1]
                    // }}
                    onDragend={this.changedCenter.bind(this)}
                    zoom={14}
                    streetViewControl={false}
                    zoomControl={false}
                    fullscreenControl={false}
                    mapTypeControl={false}
                    draggable={true}
                    onReady={this.onMapLoaded.bind(this)}
                >


                    {this.renderStartMarker()}
                    {this.renderMiddleMarker()}
                    {this.renderDestinationMarker()}
                    {this.renderBusMarker()}
                    {this.handlePolyline()}

                    {(!this.state.selected && this.props.orderMap) &&
                    <MarkerIcon toLoc={this.state.selectedFromAddress}/>}

                </Map>
                {this.state.orderReady && <PurchasePage/>}
            </Div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBIowGjwaajWBpRnebeFK_K0ut_RUCGYxs',
})(DummyMap);
