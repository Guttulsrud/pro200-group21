import React from 'react';
import {Div} from '../elements/divs/Div';
import {RoundBtn} from '../elements/buttons/RoundBtn';
import {Button} from '../elements/buttons/Button';
import {ClockIcon} from '../components/Icons/ClockIcon';
import tickets from '../utils/tickets';
import PurchaseSection from '../components/PurchaseSection';
import Text from '../elements/text/StyledText';
import Heading from '../elements/text/StyledHeading';


class PurchasePage extends React.Component {

    state = {
        busName: 'Vyvian',
        arrivalTime: 3,
        count: 0,
        sum: 0,
        travelers: {
            "Voksen": 0,
            "Barn": 0,
            "Honnør": 0,
            "Student": 0,
        }
    };


    handleAdd = (value) => {
        for (let ticket of tickets) {
            if (value === ticket.type) {
                ticket.qty++;
                console.log(ticket.type);
                console.log(this.state.travelers['Voksen'])
                this.setState(prevState => {
                    return {
                        sum: prevState.sum + ticket.price,
                        travelers: {
                            ...prevState.travelers[ticket.type],
                            "Voksen": 20
                        }
                    };

                });
            }
        }
    };

    handleSub = (value) => {
        for (let i = 0; i < tickets.length; i++) {
            if (value === tickets[i].type && tickets[i].qty !== 0) {
                tickets[i].qty--;
                this.setState(prevState => {
                    return {
                        sum: prevState.sum - tickets[i].price
                    };

                });
            }
        }
        console.log(tickets);
    };

    /*

    {
  date: "Ons, 6 Mai ",
  travelers: ["1 voksen", "1 barn"],
  type: "Enkel Reise", // Typene kan hete hva som helst, bare et eksempel
  purchased: "Ons, 6 Mai, 07:34:52", //date, men greit med klokkeslett (slippe split)
  price: "NOK 37,- incl. VAT",  // Pris med eksempel på format
  orderID: "AFG 73 89 435 34", // (simulert) Kan være hva som helst av ID
  expired: "Ons, 6 Mai, 08:10:13"
},
     */

    postDataToServer = async () => {

        let object = {
            from: this.props.ticketData.fromCoordinate,
            to: this.props.ticketData.toCoordinate,
            travelers: {
                adults: 50
            }
        };

        console.log(this.state.count);
    };

    render() {

        return (
            <Div display="flex" flexDirection="column" mx="20px" color={'vyBlack'}>
                <Div display="flex" justifyContent="space-between" alignItems="center">
                    <Heading.h1 fontSize={35}>{this.state.busName}</Heading.h1>
                    <Div display="flex" alignItems="center">
                        <ClockIcon fill="#D7D8D9"/>
                        <Text.p pl={10}>Ankommer om {this.state.arrivalTime} minutter</Text.p>
                    </Div>

                </Div>
                {tickets.map((t) => (
                    <PurchaseSection type={t.type} price={t.price} qty={t.qty} handleAdd={() => this.handleAdd(t.type)}
                                     inactive={!t.qty} handleSub={() => this.handleSub(t.type)}/>
                ))}

                <Div display="flex" justifyContent="space-between" width={0.95}>
                    <Heading.h2>Totalsum</Heading.h2>
                    <Heading.h2>{this.state.sum} kr</Heading.h2>
                </Div>

                <Button onClick={this.postDataToServer}>Kjøp Billett</Button>

            </Div>
        );
    }
};

export default PurchasePage;