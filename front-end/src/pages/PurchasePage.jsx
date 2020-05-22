import React from 'react';
import {Div} from '../elements/divs/Div';
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
    };


    handleAdd = (value) => {
        for (let i = 0; i < tickets.length; i++) {
            if (value === tickets[i].type) {
                tickets[i].qty++;
                this.setState(prevState => {
                    return {
                        sum: prevState.sum + tickets[i].price
                    };

                });
            }
        }
    };

    handleSub = (value) => {
        for (let i = 0; i < tickets.length; i++) {
            if (value === tickets[i].type) {
                tickets[i].qty--;
                this.setState(prevState => {
                    return {
                        sum: prevState.sum - tickets[i].price
                    };

                });
            }
        }
    };

    postTickets = () => {

    };

    render() {

        return (
            <Div display="flex" flexDirection="column" alignItems={"center"} height="fit-content" pb={82} bg={"#fff"} bottom={0} width={1} position={"fixed"} >
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
                <Button mt={this.state.sum ? 0 : 67} onClick={this.postTickets}>Vis avganger</Button>
            </Div>
        );
    }
}

export default PurchasePage;