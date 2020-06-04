import React from 'react';
import {Div} from "../elements/divs/Div";
import TravelMap from "../components/TravelMap";
import TimeLine from "../components/TimeLine";
import {Button} from "../elements/buttons/Button";
import {QRcode} from "../components/Icons/qrcode";
import Text from '../elements/text/StyledText';
import Heading from '../elements/text/StyledHeading';
import {StyledLink} from '../elements/links/StyledLink';


export class ActiveTicketPage extends React.Component {

    state = {
        hasActiveTicket: this.props.location.search.split("?")[1],
        journeyHasStarted: false,
        busHasArrived: false,
        progress: 0,
        busTime: 100,
    };

    componentDidMount() {
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
    onBusArrival(){
        this.setState({
            journeyHasStarted: false,
            busHasArrived: true,
        })
    }

    handleTimeData = (polyline, busIndex) => {
      this.setState({
        progress: ((busIndex / polyline.length) * 100)
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

                        <TravelMap timeData={this.handleTimeData} stateData={this.state} ticketId={this.state.hasActiveTicket} onBusArrival={this.onBusArrival.bind(this)}/>


                    </Div>
                    <Div height={"50%"} width={"100%"} bottom={0} position={"absolute"}>
                        <Div display={this.state.busHasArrived ? "none" : "flex"} alignItems="center" mx={30}>
                            <TimeLine journeyHasStarted={this.state.journeyHasStarted} progress={this.state.progress} ticketId={this.state.hasActiveTicket}/>
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
            content = <Div m={"auto"} display={"flex"} flexDirection={"column"} justifyContent={"center"} height={"100%"} width={1} color={"vyBlack"} textAlign={"center"} position={"absolute"}>
                <Heading.h1 mb={0} p={0}>Ingen aktive billetter!</Heading.h1>
                <Text.p fontSize={18} fontWeight={"medium"}>Du kan bestille en ny reise <StyledLink to={"/"} color={"vyGreen"}>her</StyledLink></Text.p>
            </Div>
        )
        return (
            <React.Fragment>
                {content}
            </React.Fragment>
        );
    }
}

export default ActiveTicketPage
