import React from 'react';
import { MainContainer } from '../elements/divs/DemoMainContainer';
import { SubContainer } from '../elements/divs/DemoSubContainer';
import { RoundBtn } from '../elements/buttons/RoundBtn';
import { Input } from '../elements/inputs/StyledInput';
import { Card } from '../elements/divs/StyledCard';
import { Button } from '../elements/buttons/Button';
import { IconBg } from '../elements/divs/IconContainer';
import { BusIcon } from '../components/Svg/BusIcon';
import { ArrowForwardIcon } from '../components/Svg/ArrowForwardIcon';

class DemoPage extends React.Component {
  state = {
    filled: undefined,
  };

  handleFilled(value) {
    if (value !== '') {
      this.setState({ filled: true });
    } else {
      this.setState({ filled: false });
    }
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <h1>The following are component demos / templates</h1>
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
          <h3>Input</h3>
          <MainContainer>
            <SubContainer>
              <div className='test-div'>
                <form class="search-form">
                  <Input
                    placeholder='Hvor vil du reise fra?'
                    filled={this.state.filled}
                    onChange={(e) => this.handleFilled(e.target.value)}
                  />
                  <button class="search-btn"><ArrowForwardIcon /></button>
                </form>
              </div>
              <ul>
                <li>Primary Input (StyledInput.js)</li>
              </ul>
            </SubContainer>
            <SubContainer>
              <Card bg='lightgrey' height='2em'>
                Test
              </Card>
              <Card bg='lightgrey' borderT height='2em'>
                Test
              </Card>
              <Card bg='lightgrey' borderB height='2em'>
                Test
              </Card>
              <Card bg='lightgrey' borderB borderT height='2em'>
                Test
              </Card>
              <Card bg='lightgrey' borderT bcolor='green' height='2em'>
                Test
              </Card>
              <Card bg='lightgrey' borderB bcolor='green' height='2em'>
                Test
              </Card>
              <Card shadow bcolor='green' height='2em'>
                Test
              </Card>
              <ul>
                <li>Select Button (StyledSelectBtn.js)</li>
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
        </div>
      </React.Fragment>
    );
  }
}

export default DemoPage;
