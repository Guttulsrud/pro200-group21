import React from 'react';
import {Div} from '../elements/divs/Div';
import {Button} from '../elements/buttons/Button';
import tickets from '../utils/tickets';
import PurchaseSection from '../components/PurchaseSection';
import Heading from '../elements/text/StyledHeading';
import axios from 'axios';
import Stepper from '../components/Stepper';
import BusSelection from '../components/BusSelection';
import buses from '../utils/buses';
import PurchaseCheckout from '../components/PurchaseCheckout';
import {Link} from 'react-router-dom';


class PurchasePage extends React.Component {

    state = {
        bus: {
            name: '',
            eta: 0
        },
        arrivalTime: 3,
        count: 0,
        sum: 0,
        //STEPPER
        currentStep: 1,
        selectedAmount: false,
        showCheckout: false,

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


    handleClick = (clickType) => {
        const {currentStep} = this.state;

        //Not mutate existing state
        let newStep = currentStep;
        clickType === 'next' ? newStep++ : newStep--;


        this.setState({
            currentStep: newStep
        });

        console.log(currentStep);

    };

    postData = async () => {
        await axios.post(
            'http://localhost:5000/ticket/create',
            this.state.data,
            {headers: {'Content-Type': 'application/json'}}
        );
        console.log('Got here');

    };

    handleShowBus = async () => {

        const props = this.props.sendState;
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
        };

        this.setState({
            selectedAmount: true,
            data
        }, () => this.handleClick('next'));
    };

    handleCheckout = (name, eta) => {
        this.setState({
            selectedAmount: false,
            showCheckout: true,
            bus: {
                name,
                eta
            }
        }, () => this.handleClick('next'));
    };


    render() {

        let content;

        if (this.state.selectedAmount) {
            content = <Div overflow={'auto'} width={1} bg={'#F5F5F5'}>
                {buses.map(b => {
                        return b.cap > this.state.count ?
                            <BusSelection
                                key={b.name}
                                handleShowCheckout={() => this.handleCheckout(b.name, b.eta)}
                                name={b.name}
                                cap={b.cap}
                                eta={b.eta}
                                curLoc={b.currentLoc}/>
                            : null;
                    }
                )}
            </Div>;
        } else if (this.state.showCheckout) {
            const props = this.props.sendState;
            content = <Div overflow={'auto'} width={1}>
                <PurchaseCheckout
                    bus={this.state.bus}
                    desFrom={props.fromLoc}
                    desTo={props.toLoc}
                    sum={this.state.sum}
                />
                <Link to={'/activeticket'}><Button width="70%" mt={this.state.sum ? 0 : 10} onClick={this.postData}>Bestill
                    buss</Button></Link>


            </Div>;
        } else {
            content = <React.Fragment>
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
                <Button width="70%" mt={this.state.sum ? 0 : 67}
                        onClick={this.state.sum > 0 ? this.handleShowBus : null}>Vis avganger</Button>
            </React.Fragment>;
        }

        // STEPPER DESCRIPTION
        const stepsArray = ['Antall reisende', 'Velg buss', 'Kjøp billett'];

        const {currentStep} = this.state;


        return (
            <Div display="flex" flexDirection="column" alignItems={'center'} height={560} pb={82}
                 bg={'#fff'} bottom={0} width={1} position={'fixed'}
            >
                <Div display="flex" justifyContent="space-between" alignItems="center" width={0.95}>
                    <Div display="flex" flexDirection="column" width="100%" justifyContent="space-between">
                        <Stepper steps={stepsArray} currentStepNumber={currentStep}/>
                    </Div>
                </Div>
                {content}
            </Div>
        );
    }
}

export default PurchasePage;