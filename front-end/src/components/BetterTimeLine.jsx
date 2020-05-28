import React from 'react';
import {Map, Marker, Polyline, GoogleApiWrapper} from 'google-maps-react';
import {mapStyle} from '../utils/MapStyle.js';
import {Button} from '../elements/buttons/Button';
import {MyLocationIcon} from './Icons/MyLocationIcon';
import {Div} from '../elements/divs/Div';
import {MarkerIcon} from './Icons/MarkerIcon';
import PurchasePage from '../pages/PurchasePage';
import {BusIcon} from "./Icons/BusIcon";


export class BetterTimeLine extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            journeyHasStarted: true,
            ticket: {}
        };
    }

    getTicketFromId = async () => {
        const url = `http://localhost:5000/ticket/details/${this.props.ticketId}`;

        return await fetch(url)
            .then(response => response.json()).then(res => {
                test = res
            })

    }


    componentDidMount() {

        console.log(this.props)

    }


    render() {


        return (
            <Div display="flex" justifyContent="space-around" alignItems="center" flexDirection="column" width={"100%"}>

                <Div display="flex" justifyContent="space-between" alignItems="center" width={"100%"}>
                    <h5 style={{marginLeft: -9}}>from</h5>
                    <h5 style={{marginRight: -9}}>to</h5>
                </Div>

                <Div display="flex" justifyContent="space-around" alignItems="center" width={"100%"}
                     position="relative">

                    <Div width={"100%"} position="relative" height="3px" bg={"#003A70"}></Div>

                    {this.state.journeyHasStarted &&
                    <Div borderRadius="100px"
                         bg={"#003A70"}
                         height="2.5em"
                         width="2.5em"
                         position="absolute"
                         left="30%"
                         display="flex"
                         justifyContent="center"
                         alignItems="center"

                    >
                        <BusIcon></BusIcon>

                    </Div>}

                    <Div display="flex"
                         alignItems="center"
                         justifyContent="center"
                         bg={"white"} right="0"
                         border="4px solid #003A70"
                         borderRadius="100px"
                         height="1em"
                         width="1em"
                         position="absolute"
                    >
                        <Div bg={"#003A70"} borderRadius="100px" height=".6em" width=".6em" position="absolute"></Div>

                    </Div>

                    <Div bg={"white"} left="0" border="4px solid #003A70" borderRadius="100px" height="1em" width="1em"
                         position="absolute"></Div>

                </Div>

                <Div display="flex" justifyContent="space-between" alignItems="center" width={"100%"}>
                    <h4 style={{marginLeft: -9}}>10:00</h4>
                    <h4 style={{marginRight: -9}}>10:00</h4>
                </Div>

            </Div>

        );
    }
}

export default BetterTimeLine
