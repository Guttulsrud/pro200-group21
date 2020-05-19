import React from 'react';
import {Polyline} from "google-maps-react";
import {Header} from "../elements/StyledHeader";
import {Link} from "react-router-dom";


class Test extends React.Component {



    render() {

        return (
            <Polyline
                path={[
                    {lat: 59.924117, lng: 10.766715},
                    {lat: 59.88809, lng: 10.5231},
                ]}
                options={{
                    strokeColor: '#00ffff',
                    strokeOpacity: 1,
                    strokeWeight: 2,
                    icons: [{
                        offset: '0',
                        repeat: '10px'
                    }],
                }}
            />
        );
    }
};

export default Test;