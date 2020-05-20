import React from 'react';
import { Div } from '../elements/divs/Div';
import { RoundBtn } from '../elements/buttons/RoundBtn';
import { Button } from '../elements/buttons/Button';


class PurchasePage extends React.Component {

    state = {
        busName: 'Vyvian',
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
                        <h2>{ticketType.name}</h2>
                        <Div>
                            {ticketType.qty === 0 ? <RoundBtn inactive>-</RoundBtn> : <RoundBtn> - </RoundBtn>}
                            {ticketType.qty}
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
            <Div>
                <h1>{this.state.busName}</h1>

                {this.renderTicketTypes()}

                <h2>Totalsum: {this.state.sum}</h2>

                <Button>Kjøp Billett</Button>

            </Div>
        );
    }
};

export default PurchasePage;