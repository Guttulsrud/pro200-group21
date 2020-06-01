import React from 'react';
import Text from '../elements/text/StyledText';
import {Div} from '../elements/divs/Div';
import {RoundBtn} from '../elements/buttons/RoundBtn';
import {ChevronLeftIcon} from '../components/Icons/ChevronLeftIcon';
import Ticket from '../components/Ticket';
import Heading from '../elements/text/StyledHeading';

class ProfilePage extends React.Component  {
    state = {
        tickets: [],
        ticketList: false
    };


    componentDidMount() {
        this.getTickets().then(ticketsAll => {
            this.setState({
                tickets: ticketsAll
            })
        });
    }


    getTickets = async () => {
        const url = `http://localhost:5000/ticket/all`;
        return await fetch(url)
            .then(response => response.json()).then(res => {
                return res;
            })
    }

    handleShowTickets = () => {
        this.setState({
            ticketList: !this.state.ticketList
        })
    }

    render() {
        let content;

        if(this.state.ticketList) {
            content= (
                <Div mx={'1em'}>
                    <Div>
                        <RoundBtn secondary mt={'2em'} onClick={this.handleShowTickets}><ChevronLeftIcon/></RoundBtn>
                        <h1>Mine reiser</h1>
                    </Div>
                    <Div>
                        {
                            this.state.tickets.map((item, i) => (
                                <Ticket key={"Ticket_ " + i}
                                        ticketdata={item}
                                />
                            ))}
                    </Div>
                </Div>
            )
        } else {
            content = (
                <div>
                    <Heading.h1 mt={0} pt={20}>Profile</Heading.h1>
                    <Text.p onClick={this.handleShowTickets}>Mine billetter</Text.p>
                </div>

            )
        }
        return (
            <React.Fragment>
            {content}
            </React.Fragment>
        );
    }
}

export default ProfilePage;
