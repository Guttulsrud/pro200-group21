import React from 'react';
import { Input } from '../elements/inputs/StyledInput';
import { ArrowForwardIcon } from '../components/Svg/ArrowForwardIcon';
import { CloseIcon } from '../components/Svg/CloseIcon';
import { StyledAC } from '../elements/inputs/StyledAutocomplete';

class SearchField extends React.Component {
  state = {
    filled: false,
    inputText: '',
  };

  handleChange = (value) => {
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
          <StyledAC
            onPlaceSelected={(place) => {
              console.log(place);
            }}
            types={[]}
            componentRestrictions={{ country: 'no' }}
            value={this.state.inputText}
            onChange={(e) => this.handleChange(e.target.value)}
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
