import React from 'react';
import styled from 'styled-components';
import { Card } from '../elements/divs/StyledCard';
import { RoundBtn } from '../elements/buttons/RoundBtn'
import { ChevronRightIcon } from '../components/Icons/ChevronRightIcon'



export const DateField = styled.div`
  width: 9em;
  height: 1em;
  display: flex;
  flex-direction: center;
  align-items: center;
  margin: 1em 4em 1em 0;
  
  
`;

export const DestField = styled.div`
  width: 9em;
  height: 1em;
  display: flex;
  flex-direction: center;
  align-items: center;
  margin: 1em 4em 1em 0;
  
  
`;

class Ticket extends React.Component {



  render() {
    return (
      <React.Fragment>
        <Card borderB bcolor="#00866E" shadow height="4em" width="16em" p="0.5em">
          <div>
            <DateField>
              <p>Tor, 14 Mars</p>
            </DateField>
            <DestField>
              <h5>{this.props.dest}</h5>
            </DestField>
          </div>
          <div>
            <RoundBtn secondary><ChevronRightIcon></ChevronRightIcon></RoundBtn>
          </div>
        </Card>
      </React.Fragment>
    );
  }
}

export default Ticket;






// state = {
  //   tickets: null,
  //   error: null
  // };


  // async fetchTickets() {

  //   const url = "localhost:5000/something";

  //   let response;
  //   let payload;

  //   try {
  //     response = await fetch(url);
  //     payload = await response.json();

  //   } catch (err) {

  //     this.setState({
  //         error: "ERROR when retrieving list of tickets: " + err,
  //         tickets: null
  //     });
  //     return;
  //   }

  //   if (response.status === 200) {
  //       this.setState({
  //         error: null,
  //         tickets: payload
  //       });
  //   } else {
  //     this.setState({
  //         error: "Issue with HTTP connection: status code " + response.status,
  //         tickets: null
  //     });
  //   }

  // }