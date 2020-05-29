import React from 'react';
import {Div} from '../elements/divs/Div';
import {RoundBtn} from "../elements/buttons/RoundBtn";
import {ChevronLeftIcon} from "../components/Icons/ChevronLeftIcon";
import Ticket from "../components/Ticket";


export class TicketPage extends React.Component {

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
                    <RoundBtn secondary mt={'2em'}><ChevronLeftIcon/></RoundBtn>
                    <h1>Mine reiser</h1>
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

export default TicketPage;