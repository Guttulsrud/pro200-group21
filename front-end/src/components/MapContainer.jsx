import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { MarkerIcon } from './Icons/MarkerIcon';
import { mapStyle } from '../utils/MapStyle.js';
import SearchField from './SearchField';
import { MyLocationIcon } from '../components/Icons/MyLocationIcon';

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
          <SearchField location={this.state.fromLoc} />
          <MyLocationIcon />
          <MarkerIcon />
        </Map>
      </React.Fragment>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBIowGjwaajWBpRnebeFK_K0ut_RUCGYxs',
})(MapContainer);
