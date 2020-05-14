import React from 'react';
import { Card } from '../elements/divs/StyledCard';

class Ticket extends React.Component {

  state = {
    tickets: null,
    error: null
  };


  async fetchTickets() {

    const url = "localhost:5000/something";

    let response;
    let payload;

    try {
      response = await fetch(url);
      payload = await response.json();

    } catch (err) {
      
      this.setState({
          error: "ERROR when retrieving list of tickets: " + err,
          tickets: null
      });
      return;
    }

    if (response.status === 200) {
        this.setState({
          error: null,
          tickets: payload
        });
    } else {
      this.setState({
          error: "Issue with HTTP connection: status code " + response.status,
          tickets: null
      });
    }

  }

  render() {
    return (
      <React.Fragment>
        <Card borderB bcolor="#00866E" flexdir="column" shadow height="4em" width="16em">
          <h5>Dato:</h5>
          <h5>Destinasjon:</h5>
        </Card>
      </React.Fragment>
    );
  }
}

export default Ticket;
