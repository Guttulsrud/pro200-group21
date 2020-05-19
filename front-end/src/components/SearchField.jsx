import React from 'react';
import { ArrowForwardIcon } from './Icons/ArrowForwardIcon';
import { CloseIcon } from './Icons/CloseIcon';
import { StyledAC } from '../elements/inputs/StyledAutocomplete';

class SearchField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filled: false,
      inputText: this.props.location || '',
    };
  }

  //   static getDerivedStateFromProps(nextProp) {
  //     return {
  //       inputText: nextProp.location,
  //     };
  //   }

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

  search = () => { };

  render() {
    let btnIcon;

    if (this.state.filled) {
      btnIcon = <CloseIcon />;
    } else {
      btnIcon = <ArrowForwardIcon />;
    }

    const { ...inputProps } = this.props;

    return (
      <React.Fragment>
        <div className='search-form'>
          <StyledAC
            placeholder='Hvor vil du reise fra?'
            onPlaceSelected={(place) => {
              console.log(place);
            }}
            types={[]}
            componentRestrictions={{ country: 'no' }}
            value={this.state.inputText || this.props.location}
            onChange={(e) => this.handleChange(e.target.value)}
            {...inputProps}
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
