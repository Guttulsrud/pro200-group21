import React from 'react';
import { Div } from '../elements/divs/Div';
import { Button } from '../elements/buttons/Button';
import tickets from '../utils/tickets';
import AmountSelection from './AmountSelection';
import Heading from '../elements/text/StyledHeading';
import axios from 'axios';
import Stepper from './Stepper';
import BusSelection from './BusSelection';
import buses from '../utils/buses';
import PurchaseCheckout from './PurchaseCheckout';
import { StyledLink } from '../elements/links/StyledLink';
import { ChevronLeftBig } from './Icons/ChevronLeftBig';


class PurchaseSection extends React.Component {

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
        ticketId: '',
        purchased: false
    };

    componentDidMount() {
        for (let ticket of tickets) {
            ticket.qty = 0
        }
        this.setState({
            sum: 0
        })
    }


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
        const { currentStep } = this.state;

        //Not mutate existing state
        let newStep = currentStep;
        clickType === 'next' ? newStep++ : newStep--;


        this.setState({
            currentStep: newStep
        });
    };

    purchased = false;
    postData = async () => {
        this.purchased = true
        await axios.post(
            'http://localhost:5000/ticket/create',
            this.state.data,
            { headers: { 'Content-Type': 'application/json' } }
        )
            .then((res) => this.setState({
                purchased: true,
                ticketId: res.data._id
            }));
    };

    handleShowBus = async () => {

        const props = this.props.sendState;
        const data = {
            user_id: '5debe43e033f2330fc179981',
            number_of_tickets: this.state.count,
            expiration: Date.now() + 1000 * 60 * 60,
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

    handleShowCheckout = (name, eta) => {
        this.setState({
            selectedAmount: false,
            showCheckout: true,
            bus: {
                name,
                eta
            }
        }, () => this.handleClick('next'));
    };

    handleGoBack = () => {
        if (this.state.selectedAmount) {
            this.setState({
                selectedAmount: false
            }, () => this.handleClick())
        } else if (this.state.showCheckout) {
            this.setState({
                showCheckout: false,
                selectedAmount: true
            }, () => this.handleClick())
        } else {
            this.props.handleGoBack()
        }

    }

    render() {

        let content;

        if (this.state.selectedAmount) {
            content = <Div overflow={'auto'} width={1} bg={'#F5F5F5'} display={"flex"} flexDirection={"column"} alignItems={"center"}>
                {buses.map(b => {
                    return b.cap > this.state.count ?
                        <BusSelection
                            key={b.name}
                            handleShowCheckout={() => this.handleShowCheckout(b.name, b.eta)}
                            name={b.name}
                            cap={b.cap}
                            eta={b.eta}
                            curLoc={b.currentLoc} />
                        : null;
                }
                )}
            </Div>;
        } else if (this.state.showCheckout) {
            if (!this.purchased) {
                this.postData().then(r => r);
            }
            const props = this.props.sendState;
            content =
                <React.Fragment>
                    <Div overflow={'auto'} height="100%" width={1} display="flex" flexDirection="column" justifyContent="space-between">
                        <PurchaseCheckout
                            bus={this.state.bus}
                            origin={props.fromLoc}
                            destination={props.toLoc}
                            sum={this.state.sum}
                        />
                        <Div width={.7} margin={"0 auto"} mb={20}>
                            <StyledLink width={1} to={`/activeticket?${this.state.ticketId}`}>
                                <Button width={"100%"}>Bestill buss</Button>
                            </StyledLink>
                        </Div>
                    </Div>


                </React.Fragment>;
        } else {
            content = <Div display={"flex"} width={1} alignItems={"center"} justifyContent="space-between" flexDirection={"column"} overflow={"auto"} height="100%">
                <Div width="100%">
                    {
                        tickets.map((t) => (
                            <AmountSelection key={t.type}
                                type={t.type}
                                price={t.price}
                                qty={t.qty}
                                inactive={!t.qty}
                                handleAdd={() => this.handleAdd(t.type)}
                                handleSub={t.qty ? () => this.handleSub(t.type) : null} />
                        ))
                    }

                    <Div display="flex" alignItems={"center"} justifyContent="space-between" width="100%" borderTop={'1px solid #D7D8D9'}>

                        <Div display={"flex"} justifyContent="space-between" width={0.90} mx={"auto"}>
                            <Heading.h2 >Totalsum</Heading.h2>
                            <Heading.h2 >{this.state.sum} kr</Heading.h2>
                        </Div>

                    </Div>
                </Div>
                <Button mb={20}
                    inactive={!this.state.count} width="70%"
                    onClick={this.state.count > 0 ? this.handleShowBus : null} >Vis avganger</Button>
            </Div>;
        }

        // STEPPER DESCRIPTION
        const stepsArray = ['Antall reisende', 'Velg buss', 'Bestill buss'];

        const { currentStep } = this.state;


        return (
            <Div display="flex" flexDirection="column" alignItems={'center'} height={"100%"}
                bg={'#fff'} width={1} position={"absolute"} bottom={0}
            >
                <Div display={"flex"} width={.95} ><Div onClick={this.handleGoBack} ml="10px" mt="10px" p={10} pl={0} ><ChevronLeftBig /></Div></Div>

                <Div display="flex" justifyContent="space-between" alignItems="center" width={0.95} borderBottom={'1px solid #D7D8D9'}>
                    <Div display="flex" flexDirection="column" width="100%" justifyContent="space-between">
                        <Stepper steps={stepsArray} currentStepNumber={currentStep} />
                    </Div>
                </Div>
                {content}
            </Div>
        );
    }
}

export default PurchaseSection;