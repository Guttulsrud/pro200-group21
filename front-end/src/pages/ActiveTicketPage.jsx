import React from 'react';
import {Link} from "react-router-dom";
import {RoundBtn} from "../elements/buttons/RoundBtn";
import {ChevronLeftIcon} from "../components/Icons/ChevronLeftIcon";
import {Div} from "../elements/divs/Div";
import DummyMap from "../components/TravelMap";
import TimeLine from "../components/TimeLine";
import {Button} from "../elements/buttons/Button";
import {QRcode} from "../components/Icons/qrcode";


export class ActiveTicketPage extends React.Component {

    state = {
        journeyHasStarted: true,
        busHasArrived: false,
        busTime: 100,
    };


    render() {


        return (
            <React.Fragment>

                <Link to='/ticket' style={{textDecoration: 'none'}}>
                    <RoundBtn secondary mt={'2em'} mx={'1em'} position="absolute" top="0" zIndex={9999}>
                        <ChevronLeftIcon/>
                    </RoundBtn>
                </Link>

                <Div display="relative"
                     color={"#AAAAAA"}
                     justifyContent="center"
                     alignItems="center"
                     width={"100%"}
                     bg={"#DDDDDD"}
                >

                    <DummyMap ticketId={this.props.location.search.split("?")[1]}/>


            </Div>
        <Div height={"50%"} bottom={0} position={"absolute"} width={"100%"}>
            <Div display={busHasArrived ? "none" : "flex"} alignItems="center" mx={30}>
                <Timeline journeyHasStarted={journeyHasStarted}></Timeline>
            </Div>

                <Div display={this.state.journeyHasStarted ? "none" : "flex"} justifyContent="center"
                     alignItems="center"
                     color="#666666" mx={"4em"} my={this.state.busHasArrived ? 20 : 10} textAlign="center">
                    {!this.state.busHasArrived && <h3>IAmBUS! ankommer om 69 minutter </h3>}
                    {this.state.busHasArrived && <h3>iAmBus har ankommet</h3>}

                </Div>

            <Div mx={40} mt={30} display={journeyHasStarted ? "none" : "flex"} justifyContent="center"
                 alignItems="center">
                {!busHasArrived ? <Button outlineRed inactive={busTime < 5}>Avbestill Reise</Button> : <Button>ÅPNE DØR</Button>}
            </Div>

            <Div mx={40} display={journeyHasStarted ? "flex" : "none"} justifyContent="center" alignItems="center">
                <QRcode></QRcode>
            </Div>
        </Div>
        </React.Fragment>
    );
};

export default ActiveTicketPage
