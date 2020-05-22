import React from 'react';
import {Div} from '../elements/divs/Div';
import {Button} from '../elements/buttons/Button';
import {ClockIcon} from '../components/Icons/ClockIcon';
import tickets from '../utils/tickets';
import PurchaseSection from '../components/PurchaseSection';
import Text from '../elements/text/StyledText';
import Heading from '../elements/text/StyledHeading';
import axios from 'axios';


class PurchasePage extends React.Component {

    state = {
        busName: 'Vyvian',
        arrivalTime: 3,
        count: 0,
        sum: 0,
    };


    handleAdd = (value) => {
        for (let ticket of tickets) {
            if (value === ticket.type) {
                ticket.qty++;
                this.setState(prevState => {
                    return {
                        sum: prevState.sum + ticket.price,
                        count: prevState.count + 1
                    };

                });
            }
        }
    };

    handleSub = (value) => {
        for (let ticket of tickets) {
            if (value === ticket.type) {
                ticket.qty--;
                this.setState(prevState => {
                    return {
                        sum: prevState.sum - ticket.price,
                        count: prevState.count - 1
                    };

                });
            }
        }
    };

    async handlePurchase() {


        const data = {
            user_id: '5debe43e033f2330fc179981',
            ticket_id: '5ebbef6d2b27952388f474f9',
            number_of_tickets: this.state.count,
            origin: 'coords',
            destination: 'coords',
            price: this.state.sum,
        }



        const response = await axios.post(
            'http://localhost:5000/ticket-instance/create',
            data,
            {headers: {'Content-Type': 'application/json'}}
        )
        console.log(response.data)
    }

    render() {

        return (
            <Div display="flex" flexDirection="column" alignItems={"center"} height="fit-content" pb={82} bg={"#fff"}
                 bottom={0} width={1} position={"fixed"}>
                <Div display="flex" justifyContent="space-between" alignItems="center" width={0.95}>
                    <Heading.h1 fontSize={35}>{this.state.busName}</Heading.h1>
                    <Div display="flex" alignItems="center">
                        <ClockIcon fill="#D7D8D9"/>
                        <Text.p pl={10}>Ankommer om {this.state.arrivalTime} minutter</Text.p>
                    </Div>
                </Div>
                {tickets.map((t) => (
                    <PurchaseSection key={t.type} type={t.type} price={t.price} qty={t.qty}
                                     handleAdd={() => this.handleAdd(t.type)}
                                     inactive={!t.qty}
                                     handleSub={t.qty ? () => this.handleSub(t.type) : null}/>
                ))}
                <Div display="flex" justifyContent="space-between" width={0.95}>
                    {this.state.sum > 0 &&
                    <React.Fragment>
                        <Heading.h2>Totalsum</Heading.h2>
                        <Heading.h2>{this.state.sum} kr</Heading.h2>
                    </React.Fragment>
                    }
                </Div>
                <Button onClick={this.handlePurchase.bind(this)} mt={this.state.sum ? 0 : 67}>Kjøp Billett</Button>
            </Div>
        );
    }
}

export default PurchasePage;