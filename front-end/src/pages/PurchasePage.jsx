import React from 'react';
import { Div } from '../elements/divs/Div';
import { RoundBtn } from '../elements/buttons/RoundBtn';
import { Button } from '../elements/buttons/Button';
import { ClockIcon } from '../components/Icons/ClockIcon'


class PurchasePage extends React.Component {

    state = {
        busName: 'Vyvian',
        arrivalTime: 3,
        count: 0,
        sum: 0,
        ticketType: [
            { name: 'Barn', qty: 0 },
            { name: 'Voksen', qty: 0 },
            { name: 'Honnør', qty: 0 },
            { name: 'Student', qty: 0 },
        ],
    }

    renderTicketTypes() {
        // Make me a lovable component instead!
        return (
            <ul className="ticket-types">
                {this.state.ticketType.map((ticketType, i) => (
                    <li key={i}>
                        <h2 className="title">{ticketType.name}</h2>
                        <Div display="flex" flexDirection="center" alignItems="center">
                            {ticketType.qty === 0 ? <RoundBtn inactive>-</RoundBtn> : <RoundBtn> - </RoundBtn>}
                            <Div mx="20px"><h3>{ticketType.qty}</h3></Div>
                            <RoundBtn onClick={this.handleQty()}>+</RoundBtn>
                        </Div>
                    </li>
                ))}
            </ul>
        );
    }

    handleQty = (index) => {

    };

    render() {

        return (
            <Div display="flex" flexDirection="column" mx="20px">
                <Div display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
                    <h1 className="display-1">{this.state.busName}</h1>
                    <Div display="flex" alignItems="center">
                        <ClockIcon fill="#D7D8D9" />
                        <p className="subtitle" style={{ paddingLeft: 10 }}>Ankommer om {this.state.arrivalTime} minutter</p>
                    </Div>

                </Div>

                {this.renderTicketTypes()}
                <Div display="flex" justifyContent="space-between">
                    <h2 className="title">Totalsum</h2>
                    <h2 className="title">{this.state.sum} kr</h2>
                </Div>

                <Button>Kjøp Billett</Button>

            </Div >
        );
    }
};

export default PurchasePage;