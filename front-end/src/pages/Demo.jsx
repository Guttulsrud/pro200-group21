import React from 'react';
import { MainContainer } from '../elements/divs/DemoMainContainer';
import { SubContainer } from '../elements/divs/DemoSubContainer';
import { RoundBtn } from '../elements/buttons/RoundBtn';
import { Input } from '../elements/inputs/StyledInput';
import { Card } from '../elements/divs/StyledCard';
import { Button } from '../elements/buttons/Button';
import Ticket from '../components/Ticket';
import { IconBg } from '../elements/divs/IconContainer';
import { BusIcon } from '../components/Svg/BusIcon';
import SearchField from '../components/SearchField';

class DemoPage extends React.Component {
  state = {
    filled: undefined,
    tickets: null,
    error: null
  };

  async componentDidMount() {
    await this.fetchTickets();
    console.log(this.state.tickets)
  }

  handleFilled(value) {
    if (value !== '') {
      this.setState({ filled: true });
    } else {
      this.setState({ filled: false });
    }
  }

  async fetchTickets() {

    const url = "http://localhost:5000/tickets/all";

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
        <div>
          <h1>The following are component demos / templates</h1>
          <br />

          <h3>Buttons</h3>
          <MainContainer>
            <SubContainer>
              <RoundBtn>+</RoundBtn>
              <br />
              <RoundBtn secondary>-</RoundBtn>
              <br />
              <RoundBtn outlineBlue>+</RoundBtn>
              <br />
              <RoundBtn outlineGreen>-</RoundBtn>
              <br />
              <RoundBtn inactive>+</RoundBtn>
              <br />
              <RoundBtn large>-</RoundBtn>
              <br />

              <ul>
                <li>RoundBtn (RoundBtn.js)</li>
                <li>RoundBtn with secondary prop (RoundBtn.js)</li>
                <li>RoundBtn with outlineBlue prop (RoundBtn.js)</li>
                <li>RoundBtn with outlineGreen prop (RoundBtn.js)</li>
                <li>RoundBtn with inactive prop (RoundBtn.js)</li>
              </ul>
            </SubContainer>

            <SubContainer>
              <Button>No props</Button>
              <Button secondary shadow>
                secondary prop
              </Button>
              <Button inactive>inactive prop</Button>
              <Button small>small prop</Button>
              <Button secondary large>
                secondary & large props
              </Button>
              <Button outlineBlue>outlineBlue prop</Button>
              <Button outlineGreen>outlineGreen prop</Button>
              <ul>
                <li>Button with different props (Button.js)</li>
              </ul>
            </SubContainer>
          </MainContainer>
          <br />
          <br />

          <h3>Input</h3>
          <MainContainer>
            <SubContainer>
              <div className='test-div'>
                <SearchField />
              </div>
              <ul>
                <li>Primary Input (StyledInput.js)</li>
              </ul>
            </SubContainer>
            <SubContainer>
              <Card bg="lightgrey" height="2em">Test</Card>
              <Card bg="lightgrey" borderT height="2em">Test</Card>
              <Card bg="lightgrey" borderB bcolor="red" height="3em">Test</Card>
              <Card borderB borderT height="1em">Test</Card>
              <Card bg="lightgrey" borderT borderB bcolor="#00866E" height="2em" width="7em">Test</Card>
              <Card bg="lightgrey" borderT bcolor="#00866E" height="2em">Test</Card>
              <Card bg="lightgrey" borderB bcolor="#00866E" height="5em">Test</Card>
              <Card bg="lightgrey" borderT bcolor="#00866E" height="2em" width="4em">Test</Card>
              <Card shadow height="2em">Test</Card>
              <ul>
                <li>Card (StyledCard.js)</li>
              </ul>
            </SubContainer>
          </MainContainer>
          <MainContainer>
            <SubContainer>
              <IconBg>
                <BusIcon />
              </IconBg>
              <br />
              <IconBg secondary>
                <BusIcon />
              </IconBg>
              <ul>
                <li>
                  Icon composed of IconBg and BusIcon (IconContainer.js &
                  BusIcon.js)
                </li>
                <li>
                  Icon composed of IconBg (with secondary prop) and BusIcon
                  (IconContainer.js & BusIcon.js)
                </li>
              </ul>
            </SubContainer>
          </MainContainer>
          <br />
          <br />

          <h3>Components</h3>
          <MainContainer>
            <SubContainer>
              <Ticket></Ticket>
            </SubContainer>

          </MainContainer>

        </div>
      </React.Fragment>
    );
  }
}

export default DemoPage;
