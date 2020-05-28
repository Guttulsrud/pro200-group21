import React from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import {mapStyle} from '../utils/MapStyle.js';
import {Button} from '../elements/buttons/Button';
import {MyLocationIcon} from './Icons/MyLocationIcon';
import FromSearchField from './FromSearchField';
import {Div} from '../elements/divs/Div';
import {MarkerIcon} from './Icons/MarkerIcon';
import PurchasePage from '../pages/PurchasePage';
import ToSearchField from './ToSearchField';


export class MapContainer extends React.Component {

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
            points: [],
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
                } else if (this.state.selectedFromAddress && !this.state.selectedToAddress) {
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
        if (state.selectedFromAddress && this.state.toLoc) {
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
            height: '100%',
        };

        return (
            <Div display={"flex"} flexDirection={"column"}>
                <Div>
                <Map
                    className={this.state.orderReady ? "map" : ""}
                    style={!this.state.orderReady ? null : style}
                    google={this.props.google}
                    initialCenter={{lat: 59.924117, lng: 10.766715,}}
                    centerAroundCurrentLocation
                    center={{
                        lat: this.state.latitude,
                        lng: this.state.longitude
                    }}
                    onDragend={this.changedCenter.bind(this)}
                    zoom={this.state.selectedToAddress ? 14 : 17}
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
                    {this.renderDestinationMarker()}
                    {(!this.state.selectedFromAddress || !this.state.selectedToAddress) &&
                    <MarkerIcon toLoc={this.state.selectedFromAddress}/>}

                </Map>
                </Div>
                {this.state.orderReady && <PurchasePage sendState={this.state}/>}

                {!this.state.orderReady &&
                <Div paddingTop='30px'>
                    <Button
                        width='70%'
                        bottom
                        center
                        inactive={this.state.selectedFromAddress && !this.state.toLoc}
                        onClick={!this.state.selectedFromAddress || !this.state.selectedToAddress ? this.handleSelection.bind(this) : this.handleOrder}
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
