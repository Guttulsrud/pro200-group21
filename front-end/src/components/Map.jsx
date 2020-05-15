import React from 'react';

class Map extends React.Component {
    state = {
        map: undefined,
        marker: undefined,
        myLatLng: { lat: 59.8900403, lng: 10.8107293 },
    };


    initMap = () => {

        const inputFrom = document.getElementById('from');
        const inputTo = document.getElementById('to');


        this.state.map = new window.google.maps.Map(document.getElementById('map'), {
            center: this.state.myLatLng,
            zoom: 14
        });

        this.state.marker = new window.google.maps.Marker({
            map: this.state.map,
        });

        this.state.marker.setPosition(this.state.myLatLng);

        new window.google.maps.places.Autocomplete(inputFrom);
        new window.google.maps.places.Autocomplete(inputTo);

    }


    componentDidMount() {
        const script = document.createElement('script');
        script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBIowGjwaajWBpRnebeFK_K0ut_RUCGYxs&libraries=places';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    };

    render() {
        return (
            <div id="map"></div>
        );
    }
}

export default Map;
