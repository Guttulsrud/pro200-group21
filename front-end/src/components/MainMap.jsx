import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { mapStyle } from '../utils/MapStyle.js';
import { Button } from '../elements/buttons/Button';
import { MyLocationIcon } from './Icons/MyLocationIcon';
import FromSearchField from './FromSearchField';
import { Div } from '../elements/divs/Div';
import { MarkerIcon } from './Icons/MarkerIcon';
import { DestinationIcon } from './Icons/DestinationIcon';
import PurchaseSection from './PurchaseSection';
import ToSearchField from './ToSearchField';
import { Transition, animated } from 'react-spring/renderprops';



export class MainMap extends React.Component {

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
            latitude: 0,
            longitude: 0
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
                if (!this.state.selectedFromAddress) {
                    this.setState({
                        fromLoc: "Min posisjon"
                    })

                } else if (!this.state.selectedToAddress) {
                    this.setState({
                        toLoc: "Min posisjon"
                    })
                }
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
        } else if (!this.state.selectedFromAddress) {
            this.setState({
                selectedFromAddress: true,
                fromCoordinate: [state.latitude, state.longitude],
            }, () => this.moveCursor(this.state.longitude));
        }
    }

    moveCursor = prevState => {
        this.setState({
            longitude: prevState + 0.000600
        })
    }
    renderStartMarker = () => {
        const state = this.state;
        if (state.fromCoordinate) {
            return (
                <Marker
                    position={{ lat: state.fromCoordinate[0], lng: state.fromCoordinate[1] }}
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
                    position={{ lat: state.toCoordinate[0], lng: state.toCoordinate[1] }}
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

    insertFrom = (value) => {
        this.setState({
            fromLoc: value
        })
    }

    insertTo = (value) => {
        this.setState({
            toLoc: value
        })
    }

    handleGoBack = () => {
        this.setState({
            orderReady: false
        })
    }

    render() {

        return (
            <Div display={"flex"} flexDirection={"column"} overflow={"hidden"} >

                <Map
                    google={this.props.google}
                    initialCenter={{ lat: 59.924117, lng: 10.766715, }}
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
                    <FromSearchField
                        fromLoc={this.state.fromLoc}
                        fromSelected={this.state.selectedFromAddress}
                        handleInputSelect={this.handleInputSelect}
                        handleRemoveFrom={this.handleRemoveFrom}
                        insertFrom={this.insertFrom}
                    />

                    {(this.state.selectedFromAddress) && <ToSearchField
                        toLoc={this.state.toLoc}
                        handleInputSelect={this.handleInputSelect}
                        handleRemoveTo={this.handleRemoveTo}
                        insertTo={this.insertTo}
                    />}
                    <MyLocationIcon showCurrentLocation={this.showCurrentLocation} />

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
                        position={{ lat: this.state.myLat, lng: this.state.myLng }}
                    />

                    {this.renderStartMarker()}
                    {this.renderDestinationMarker()}
                    {(!this.state.selectedFromAddress || !this.state.selectedToAddress) &&
                        (!this.state.selectedFromAddress ? <MarkerIcon /> : <DestinationIcon />)}
                </Map>


                <Div paddingTop='30px'>
                    <Button
                        mb={20}
                        width='70%'
                        bottom
                        center
                        inactive={this.state.selectedFromAddress && !this.state.toLoc}
                        onClick={!this.state.selectedFromAddress || !this.state.selectedToAddress ? this.handleSelection.bind(this) : this.handleOrder}
                        animate={(!this.state.selectedFromAddress && this.state.fromLoc) || (!this.state.selectedToAddress && this.state.toLoc)}
                    >
                        {!this.state.selectedFromAddress ? 'Hent meg her' : this.state.selectedToAddress ? 'Velg antall reisende' : 'Jeg skal hit'}
                    </Button>
                </Div>

                <Transition native items={this.state.orderReady} from={{ marginLeft: 1000 }} enter={{ marginLeft: 0 }} leave={{ marginLeft: 1000 }} config={{ duration: 300, ease: "easeIn" }}>
                    {show => show && (props => (
                        <animated.div style={props} >
                            <PurchaseSection sendState={this.state} handleGoBack={this.handleGoBack} />
                        </animated.div>
                    ))}
                </Transition>
            </Div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBIowGjwaajWBpRnebeFK_K0ut_RUCGYxs',
})(MainMap);
