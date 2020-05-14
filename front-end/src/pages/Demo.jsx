import React from 'react';
import { MainContainer } from '../elements/divs/DemoMainContainer';
import { SubContainer } from '../elements/divs/DemoSubContainer';
import { RoundBtn } from '../elements/buttons/StyledRoundBtn';
import { SelectBtn } from '../elements/buttons/StyledSelectBtn';
import { Input } from '../elements/inputs/StyledInput';

class DemoPage extends React.Component {

  state = {
    filled: undefined,
    
  };

  //const [filled, setFilled] = useState(false);

  handleFilled(value) {
    if (value !== '') {
      this.setState({filled: true});
    } else {
      this.setState({filled: false});
    }
  };

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
              <RoundBtn primary>-</RoundBtn>
              <ul>
                <li>Round Button (StyledRoundBtn.js)</li>
                <li>Round Button Primary (StyledRoundBtn.js)</li>
              </ul>
            </SubContainer>
            <SubContainer>
              <SelectBtn>Test</SelectBtn>
              <br />
              <SelectBtn primary>Test</SelectBtn>
              <ul>
                <li>Select Button (StyledSelectBtn.js)</li>
                <li>Select Button Primary (StyledSelectBtn.js)</li>
              </ul>
            </SubContainer>
          </MainContainer>
          <MainContainer>
            <SubContainer>
              <div className='test-div'>
                <Input
                  placeholder='Hvor vil du reise fra?'
                  filled={this.state.filled}
                  onChange={(e) => this.handleFilled(e.target.value)}
                />
              </div>
              <ul>
                <li>Primary Input (StyledInput.js)</li>
              </ul>
            </SubContainer>
          </MainContainer>
        </div>
      </React.Fragment>
    );
  }
};

export default DemoPage;
