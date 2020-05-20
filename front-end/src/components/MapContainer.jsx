import React from 'react';
import {Map, Marker, Polyline, GoogleApiWrapper} from 'google-maps-react';
import {mapStyle} from '../utils/MapStyle.js';
import {Button} from '../elements/buttons/Button';
import {MyLocationIcon} from './Icons/MyLocationIcon';
import SearchField from './SearchField';
import {Div} from '../elements/divs/Div';
import {MarkerIcon} from './Icons/MarkerIcon';

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
            address: [],
            selected: false,
        };
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
                toCoordinate: [state.latitude, state.longitude],
                selected: true,
                fromLoc: '',
            });
        } else {
            this.setState({
                selectedFromAddress: true,
                fromCoordinate: [state.latitude, state.longitude],
                fromLoc: '',
            });
        }
    }

    renderStartMarker = () => {
        const state = this.state;
        if (state.fromCoordinate) {
            return (
                <Marker
                    position={{lat: state.fromCoordinate[0], lng: state.fromCoordinate[1]}}
                />
            );
        }
    };

    renderDestinationMarker = () => {
        const state = this.state;
        if (state.toCoordinate) {
            return (
                <Marker
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
                    position={{lat: state.middleAddress[0], lng: state.middleAddress[1]}}
                />
            );
        }
    };
    renderBusMarker = () => {
        const state = this.state;
        if (state.busCoordinate) {
            console.log("render bus")
            return (
                <Marker
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
            console.log(this.state.polylineArray[this.busIndex])
            this.setState({
                    busCoordinate: this.state.polylineArray[this.busIndex]
                }
            )
            this.busIndex++;
        }
    }

    handlePolyline = () => {
        const state = this.state;

        if (state.toCoordinate.length > 0) {
            if (this.state.polylineArray.length < 1) {
                const fromLatLng = `${this.state.fromCoordinate[0]},${this.state.fromCoordinate[1]}`;
                const toLatLng = `${this.state.toCoordinate[0]},${this.state.toCoordinate[1]}`;


                //IGNORE FROM HERE

                let startLat = parseFloat(fromLatLng.split(",")[0]) + 0.01 * Math.random();
                let startLng = parseFloat(fromLatLng.split(",")[1]) + 0.01 * Math.random();
                let start = startLat + "," + startLng;

                let middleLat = parseFloat(toLatLng.split(",")[0]) + 0.01 * Math.random();
                let middleLng = parseFloat(toLatLng.split(",")[1]) + 0.01 * Math.random();
                let middle = middleLat + "," + middleLng;

                const url0 = `http://localhost:5000/geocoder/geo-json/${start}/${fromLatLng}`;
                const url1 = `http://localhost:5000/geocoder/geo-json/${fromLatLng}/${middle}`;
                const url2 = `http://localhost:5000/geocoder/geo-json/${middle}/${toLatLng}`;
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
                                            middleAddress: [middleLat, middleLng]
                                        });
                                    });
                            });
                    });

                // STOP IGNORE HERE
            }

            if (this.state.receivedPolyLine) {
                this.animateBus();
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

        return (
            <Div>
                <Map
                    google={this.props.google}
                    initialCenter={{
                        lat: 59.924117,
                        lng: 10.766715,
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
                    <MyLocationIcon/>

                    {this.renderStartMarker()}
                    {this.renderMiddleMarker()}
                    {this.renderDestinationMarker()}
                    {this.renderBusMarker()}
                    {this.handlePolyline()}
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
