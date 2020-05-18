import React from 'react';
import { Input } from '../elements/inputs/StyledInput';
import { ArrowForwardIcon } from '../components/Svg/ArrowForwardIcon';
import { CloseIcon } from '../components/Svg/CloseIcon';

class SearchField extends React.Component {
  state = {
    filled: false,
    inputText: '',
  };

  handleFilled = (value) => {
    this.setState({ inputText: value });
    if (value !== '') {
      this.setState({ filled: true });
    } else {
      this.setState({ filled: false });
    }
  };

  clearInput = () => {
    this.setState({ inputText: '' });
    this.setState({ filled: false });
  };

  search = () => {};

  render() {
    let btnIcon;

    if (this.state.filled) {
      btnIcon = <CloseIcon />;
    } else {
      btnIcon = <ArrowForwardIcon />;
    }

    return (
      <React.Fragment>
        <div className='search-form'>
          <Input
            placeholder='Hvor vil du reise fra?'
            filled={this.state.filled}
            onChange={(e) => this.handleFilled(e.target.value)}
            value={this.state.inputText}
          />
          <button
            onClick={this.state.filled ? this.clearInput : this.search}
            className='search-btn'
          >
            {btnIcon}
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchField;
