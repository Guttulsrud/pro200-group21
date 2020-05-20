import React from 'react';
import { Div } from '../elements/divs/Div';
import { RoundBtn } from '../elements/buttons/RoundBtn';
import { Button } from '../elements/buttons/Button';
import { ClockIcon } from '../components/Icons/ClockIcon'
import tickets from "../utils/tickets";
import PurchaseSection from "../components/PurchaseSection";


class PurchasePage extends React.Component {

    state = {
        busName: 'Vyvian',
        arrivalTime: 3,
        count: 0,
        sum: 0,
    }


    handleAdd = (value) => {
        for(let i = 0; i < tickets.length; i++) {
            if(value === tickets[i].type) {
                tickets[i].qty ++
                this.setState(prevState => {
                    return {
                        sum: prevState.sum + tickets[i].price
                    }

                })
            }
        }
        console.log(tickets)
    };

    handleSub = (value) => {
        for(let i = 0; i < tickets.length; i++) {
            if(value === tickets[i].type && tickets[i].qty !== 0) {
                tickets[i].qty --
                this.setState(prevState => {
                    return {
                        sum: prevState.sum - tickets[i].price
                    }

                })
            }
        }
        console.log(tickets)
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
                {tickets.map((t) => (
                    <PurchaseSection type={t.type} price={t.price} qty={t.qty} handleAdd={() => this.handleAdd(t.type)} inactive={!t.qty} handleSub={() => this.handleSub(t.type)} />
                ))}

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