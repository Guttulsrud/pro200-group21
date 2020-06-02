import React from 'react';
import {Link} from "react-router-dom";
import {RoundBtn} from "../elements/buttons/RoundBtn";
import {ChevronLeftIcon} from "../components/Icons/ChevronLeftIcon";
import {Div} from "../elements/divs/Div";
import TravelMap from "../components/TravelMap";
import TimeLine from "../components/TimeLine";
import {Button} from "../elements/buttons/Button";
import {QRcode} from "../components/Icons/qrcode";
import Text from '../elements/text/StyledText';


export class ActiveTicketPage extends React.Component {

    state = {
        hasActiveTicket: this.props.location.search.split("?")[1],
        journeyHasStarted: false,
        busHasArrived: false,
        busTime: 100,
    };

    componentWillMount() {
        if (!this.state.hasActiveTicket) {
            const fromLS = JSON.parse(localStorage.getItem('ActiveTicketState'));
            this.setState(fromLS)
        }

    }

    componentWillUnmount() {
        localStorage.setItem('ActiveTicketState', JSON.stringify(this.state));
    }

    openDoor() {
        this.setState({
            journeyHasStarted: true,
            busHasArrived: false,
        })
    }


    render() {
        let content;

        if (this.state.hasActiveTicket) {
            content = (
                <React.Fragment>

                    {/*<Link to='/ticket' style={{textDecoration: 'none'}}>*/}
                    {/*    <RoundBtn secondary mt={'2em'} mx={'1em'} position="absolute" top="0" zIndex={9999}>*/}
                    {/*        <ChevronLeftIcon/>*/}
                    {/*    </RoundBtn>*/}
                    {/*</Link>*/}

                    <Div display="relative"
                         color={"#AAAAAA"}
                         justifyContent="center"
                         alignItems="center"
                         width={"100%"}
                         bg={"#DDDDDD"}
                    >

                        <TravelMap stateData={this.state} ticketId={this.state.hasActiveTicket}/>


                    </Div>
                    <Div height={"50%"} width={"100%"} bottom={0} position={"absolute"}>
                        <Div display={this.state.busHasArrived ? "none" : "flex"} alignItems="center" mx={30}>
                            <TimeLine ticketId={this.state.hasActiveTicket}/>
                        </Div>

                        <Div display={this.state.journeyHasStarted ? "none" : "flex"} justifyContent="center"
                             alignItems="center"
                             color="#666666" mx={"4em"} my={this.state.busHasArrived ? 20 : 10} textAlign="center">
                            {!this.state.busHasArrived && <h3>IAmBUS! ankommer om 69 minutter </h3>}
                            {this.state.busHasArrived && <h3>iAmBus har ankommet</h3>}

                        </Div>

                        <Div mx={40} mt={30} display={this.state.journeyHasStarted ? "none" : "flex"}
                             justifyContent="center"
                             alignItems="center">
                            {this.state.busHasArrived ? <Button onClick={this.openDoor.bind(this)}>ÅPNE DØR</Button> :
                                <Button outlineOrange inactiveOutline={this.state.busTime < 5}>Avbestill Reise</Button>}
                        </Div>

                        <Div mx={40} display={this.state.journeyHasStarted ? "flex" : "none"} justifyContent="center"
                             alignItems="center">
                            <QRcode></QRcode>
                        </Div>
                    </Div>

                </React.Fragment>
            )
        } else (
            content = <Text.p mt={0} p={20}>Du har ingen aktive billetter, bestill en reise ved å trykke på "Ny reise" i
                menyen</Text.p>
        )
        return (
            <React.Fragment>
                {content}
            </React.Fragment>
        );
    }
}

export default ActiveTicketPage
