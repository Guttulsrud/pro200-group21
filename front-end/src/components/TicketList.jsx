import React from 'react';
import { Div } from '../elements/divs/Div';
import Ticket from "./Ticket";
import { ChevronLeftBig } from './Icons/ChevronLeftBig';
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
            <Div>
                <Div>
                    <Div onClick={this.props.handleShowTickets} mt="15px" ml="5px" p={10} left={0} top={0} position={"absolute"}><ChevronLeftBig /></Div>
                    <Heading.h1 mt={0} pt={92} pl={15}>Mine reiser</Heading.h1>
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