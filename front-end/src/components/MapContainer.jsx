import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import PinIcon from '../images/pin.png';
import { MarkerIcon } from '../components/Svg/MarkerIcon';
import { mapStyle } from '../utils/MapStyle.js';
import { Div } from '../elements/divs/Div';
import SearchField from './SearchField';
import { Input } from '../elements/inputs/StyledInput';

export class MapContainer extends React.Component {
  _mapLoaded(mapProps, map) {
    map.setOptions({
      styles: mapStyle,
    });
  }

  state = {
    address: [],
    fromLoc: '',
  };

  changedCenter(mapProps, map) {
    let lat = map.center.lat();
    let lng = map.center.lng();

    const url = `http://localhost:5000/geocoder/coordinates/${lat}/${lng}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ fromLoc: data.address.split(',')[0] });
      });
  }

  render() {
    const style = {
      width: '100%',
      height: '100%',
    };
    return (
      <React.Fragment>
        <SearchField location={this.state.fromLoc} />

        <Map
          google={this.props.google}
          initialCenter={{
            lat: 59.924117,
            lng: 10.766715,
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
          <MarkerIcon />
        </Map>
      </React.Fragment>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBIowGjwaajWBpRnebeFK_K0ut_RUCGYxs',
})(MapContainer);
