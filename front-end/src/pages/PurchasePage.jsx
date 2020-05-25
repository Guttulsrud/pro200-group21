import React from 'react';
import { Div } from '../elements/divs/Div';
import { Button } from '../elements/buttons/Button';
import { ClockIcon } from '../components/Icons/ClockIcon';
import tickets from '../utils/tickets';
import PurchaseSection from '../components/PurchaseSection';
import Text from '../elements/text/StyledText';
import Heading from '../elements/text/StyledHeading';
import Stepper from '../components/Stepper'
import BusSelection from '../components/BusSelection';


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
        },
        //STEPPER
        currentStep: 1,
        selectedAmount: false
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
            if (value === tickets[i].type) {
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

    handleClick = (clickType) => {
        const { currentStep } = this.state;

        //Not mutate existing state
        let newStep = currentStep;
        clickType === "next" ? newStep++ : newStep--;


        this.setState({
            currentStep: newStep
        });

        console.log(currentStep);

    };

    handleShowBus = () => {
        this.setState({
            selectedAmount: true
        }, () => this.handleClick("next"))
    };



    render() {
        let content;

        if(this.state.selectedAmount) {
            content = <React.Fragment>
                    <BusSelection/>
            </React.Fragment>
        } else {
            content = <React.Fragment>
                {
                    tickets.map((t) => (
                        <PurchaseSection key={t.type} type={t.type} price={t.price} qty={t.qty}
                                         handleAdd={() => this.handleAdd(t.type)}
                                         inactive={!t.qty}
                                         handleSub={t.qty ? () => this.handleSub(t.type) : null} />
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
                <Button mt={this.state.sum ? 0 : 67} onClick={this.state.sum > 0 ? this.handleShowBus : null}>Vis avganger</Button>
            </React.Fragment>
        }

        // STEPPER DESCRIPTION
        const stepsArray = ["Antall reisende", "Velg buss", "Kjøp billett"];



        const { currentStep } = this.state;



        return (
            <Div display="flex" flexDirection="column" alignItems={"center"} height={560} pb={82} bg={this.state.selectedAmount ? "#F5F5F5" : "#fff"} bottom={0} width={1} position={"fixed"} >
                <Div display="flex" justifyContent="space-between" alignItems="center" width={0.95}>
                    <Div display="flex" flexDirection="column" width="100%" justifyContent="space-between">
                        <Stepper steps={stepsArray} currentStepNumber={currentStep} />
                    </Div>
                </Div>
                {content}
            </Div>
        );
    }
}

export default PurchasePage;