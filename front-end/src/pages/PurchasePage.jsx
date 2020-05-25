import React from 'react';
import {Div} from '../elements/divs/Div';
import {Button} from '../elements/buttons/Button';
import {ClockIcon} from '../components/Icons/ClockIcon';
import tickets from '../utils/tickets';
import PurchaseSection from '../components/PurchaseSection';
import Text from '../elements/text/StyledText';
import Heading from '../elements/text/StyledHeading';
import axios from 'axios';
import Stepper from '../components/Stepper'


class PurchasePage extends React.Component {

    state = {
        busName: 'Vyvian',
        arrivalTime: 3,
        count: 0,
        sum: 0,
        //STEPPER
        currentStep: 1
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

        const props = this.props.sendState
        const data = {
            user_id: '5debe43e033f2330fc179981',
            number_of_tickets: this.state.count,
            price: this.state.sum,
            route: {
                origin: {
                    title: props.fromLoc,
                    coordinates: props.fromCoordinate
                },
                destination: {
                    title: props.toLoc,
                    coordinates: props.toCoordinate
                }
            }
        }


        await axios.post(
            'http://localhost:5000/ticket/create',
            data,
            {headers: {'Content-Type': 'application/json'}}
        )
    }

    handleClick = (clickType) => {
        const {currentStep} = this.state;

        //Not mutate existing state
        let newStep = currentStep;
        clickType === "next" ? newStep++ : newStep--;


        this.setState({
            currentStep: newStep
        });

        console.log(currentStep);

    }


    render() {

        // STEPPER DESCRIPTION
        const stepsArray = ["Antall reisende", "Velg buss", "Kjøp billett"];


        const {currentStep} = this.state;


        return (
            <Div display="flex" flexDirection="column" alignItems={"center"} height="fit-content" pb={82} bg={"#fff"}
                 bottom={0} width={1} position={"fixed"}>
                <Div display="flex" justifyContent="space-between" alignItems="center" width={0.95}>

                    <Div display="flex" flexDirection="column" width="100%" justifyContent="space-between">

                        <Stepper steps={stepsArray} currentStepNumber={currentStep}/>

                        <Div width="100%" justifyContent="space-between">
                            <Button width="100px" onClick={() => this.handleClick()}>Previous</Button>
                            <Button width="100px" onClick={() => this.handleClick("next")}>Next</Button>
                        </Div>
                    </Div>
                </Div>
                {
                    tickets.map((t) => (
                        <PurchaseSection key={t.type} type={t.type} price={t.price} qty={t.qty}
                                         handleAdd={() => this.handleAdd(t.type)}
                                         inactive={!t.qty}
                                         handleSub={t.qty ? () => this.handleSub(t.type) : null}/>
                    ))
                }
                <Div display="flex" justifyContent="space-between" width={0.95}>
                    {this.state.sum > 0 &&
                    <React.Fragment>
                        <Heading.h2>Totalsum</Heading.h2>
                        <Heading.h2>{this.state.sum} kr</Heading.h2>
                    </React.Fragment>
                    }
                </Div>
                <Button onClick={this.handlePurchase.bind(this)} mt={this.state.sum ? 0 : 67}>Vis avganger</Button>
            </Div>
        );
    }
}

export default PurchasePage;