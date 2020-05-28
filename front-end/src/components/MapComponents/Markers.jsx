import React from "react";
import {Map, Marker} from "google-maps-react";

export class Markers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fromCoordinate: props.parentState.fromCoordinate,
            toCoordinate: props.parentState.toCoordinate,
            stopCoordinate: props.parentState.stopCoordinate,
            busCoordinate: props.parentState.busCoordinate,
        }
    }

    renderStartMarker() {
        const state = this.state;
        if (state.fromCoordinate) {
            return (
                < Marker
                    position={
                        {
                            lat: state.fromCoordinate[0],
                            lng: state.fromCoordinate[1]
                        }
                    }
                />
            );
        }
    };

    renderDestinationMarker() {
        const state = this.state;
        if (state.toCoordinate) {
            return (
                < Marker
                    position={
                        {
                            lat: state.toCoordinate[0],
                            lng: state.toCoordinate[1]
                        }
                    }
                />
            );
        }
    };

    renderMiddleMarker() {
        const state = this.state;
        if (state.middleAddress) {
            return (
                < Marker
                    position={
                        {
                            lat: state.middleAddress[0],
                            lng: state.middleAddress[1]
                        }
                    }
                />
            );
        }
    };

    renderBusMarker() {
        const state = this.state;
        if (state.busCoordinate) {
            return (
                <div>
                    <Item/>
                </div>
            );
        }
    };

    render() {
        return (
            <div>
                {this.renderStartMarker()}
                {this.renderMiddleMarker()}
                {this.renderDestinationMarker()}
                {this.renderBusMarker()}
            </div>
        )
    }
}