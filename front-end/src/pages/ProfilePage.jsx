import React from 'react';
import Text from '../elements/text/StyledText';
import { Div } from '../elements/divs/Div';
import Heading from '../elements/text/StyledHeading';
import TicketList from '../components/TicketList';

class ProfilePage extends React.Component {
    state = {
        ticketList: false
    };


    handleShowTickets = () => {
        this.setState({
            ticketList: !this.state.ticketList
        })
    }

    render() {
        let content;

        if (this.state.ticketList) {
            content = (
              <TicketList handleShowTickets={this.handleShowTickets}/>
            )
        } else {
            content = (
                <Div mx={'1em'} display="flex" flexDirection="column" justifyContent="space-between" height="100%">

                    <Div zIndex={100}>
                        <Heading.h1 mt={0} pt={92} fontSize="2em">Min profil</Heading.h1>
                        <Text.p fontSize="1.6rem" color='vyGreen' onClick={this.handleShowTickets}>Mine reiser</Text.p>
                    </Div>
                    <Div position="relative" bottom="-180px" width="auto" height="500px" zIndex={1} backgroundSize="cover" style={{ backgroundImage: `url("images/4-crop-light.png")` }}>

                    </Div>
                </Div>

            )
        }
        return (
            <Div height="100%" width="100%" position="absolute" overflow={this.state.ticketList ? "auto" : "hidden"} >
                {content}
            </Div>
        );
    }
}

export default ProfilePage;
