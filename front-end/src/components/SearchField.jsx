import React from 'react';
import { CloseIcon } from './Icons/CloseIcon';
import { StyledAC } from '../elements/inputs/StyledAutocomplete';

class SearchField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filled: false,
      inputText: '',
    };
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.location != null &&
      prevProps.location !== this.props.location
    ) {
      this.setState({
        inputText: this.props.location,
        filled: true,
      });
    }
  }

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

  render() {
    return (
      <React.Fragment>
        <div className='search-form'>
          <StyledAC
            placeholder={
              this.props.fromSelected
                ? 'Hvor vil du reise til?'
                : 'Hvor vil du reise fra?'
            }
            onPlaceSelected={(place) => {
              console.log(place)
              this.props.handleInputSelect(place.geometry.location.lat(), place.geometry.location.lng() )
            }}
            types={[]}
            componentRestrictions={{ country: 'no' }}
            value={this.state.inputText}
            onChange={(e) => this.handleChange(e.target.value)}
            filled={this.state.filled}
          />
          {this.state.filled && (
            <button onClick={this.clearInput} className='search-btn'>
              <CloseIcon />
            </button>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default SearchField;
