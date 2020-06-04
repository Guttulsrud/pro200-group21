import React from 'react';
import {Div} from '../elements/divs/Div';
import Ticket from "./Ticket";
import BackArrow from './Icons/BackArrow';
import Heading from '../elements/text/StyledHeading';


export class TicketList extends React.Component {

    state = {
        tickets: []
    };


    componentDidMount() {
        this.getTickets().then(ticketsAll => {
            this.setState({
                tickets: ticketsAll
            })
        });
    }


    getTickets = async () => {
        const url = `http://localhost:5000/ticket/all`;
        return await fetch(url)
            .then(response => response.json()).then(res => {
                return res;
            })
    }

    render() {
        return (
            <Div mx={'1em'}>
                <Div>
                    <Div onClick={this.props.handleShowTickets} p={10} left={0} top={0} position={"absolute"}><BackArrow /></Div>
                    <Heading.h1 mt={0} pt={92}>Mine reiser</Heading.h1>
                </Div>

                <Div>
                    {
                        this.state.tickets.map((item, i) => (
                            <Ticket key={"Ticket_ " + i}
                                    ticketdata={item}
                            />
                        ))}
                </Div>
            </Div>
        );
    }
}

export default TicketList;