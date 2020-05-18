import React from 'react';
import ReactDOM from 'react-dom';
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


    constructor(props) {
        super(props);

        this.state = {
            markerBois: []

        }
    }

    changedCenter(prevProps, map) {

        let lat = map.center.lat();
        let lng = map.center.lng();


        const url = `http://localhost:5000/geocoder/coordinates/${lat}/${lng}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data.address.split(',')[0])
            });


    }


    test() {
        this.state.markerBois.push({latitude: 59.924117, longitude: 10.766715})

        this.displayMarkers();

        this.render();
        console.log(this.state.markerBois)
    }

    displayMarkers = () => {
        console.log("Hello")
        return this.state.markerBois.map((marker, index) => {
            return <Marker key={index} id={index} position={{
                lat: marker.latitude,
                lng: marker.longitude
            }}/>
        })
    }

    render() {

        const style = {
            width: '100%',
            height: '100%'
        }
        return (

            <Div>
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
                    zoom={10}
                    style={style}
                    streetViewControl={false}
                    zoomControl={false}
                    fullscreenControl={false}
                    mapTypeControl={false}
                    draggable={true}
                    onReady={(mapProps, map) => this._mapLoaded(mapProps, map)}
                >

                    {this.displayMarkers()}

                    <MarkerIcon/>


                </Map>
                <Button bottom center onClick={this.test.bind(this)}>Velg fra</Button>

            </Div>
        )

    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBIowGjwaajWBpRnebeFK_K0ut_RUCGYxs')
})(MapContainer)



