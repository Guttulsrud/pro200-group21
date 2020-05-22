import React from 'react';
import { CloseIcon } from './Icons/CloseIcon';
import {Label, StyledAC} from '../elements/inputs/StyledAutocomplete';

class ToSearchField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filled: false,
            inputText: '',
        };
    }

    componentDidUpdate(prevProps) {
        if (
            this.props.toLoc != null &&
            prevProps.toLoc !== this.props.toLoc
        ) {
            this.setState({
                inputText: this.props.toLoc,
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
     //@Todo Finne ut hvorfor handleRemoveTo() gjør at clearInput må kjøres to ganger for å sette filled til false
    clearInput = () => {
        this.setState({ inputText: '', filled: false });
        this.props.handleRemoveTo()
    };

    render() {
        return (
            <React.Fragment>
                <div className='search-form'>
                    <StyledAC
                        placeholder={''}
                        onPlaceSelected={(place) => {
                            this.props.handleInputSelect(place.geometry.location.lat(), place.geometry.location.lng() );
                            this.setState({
                                inputText: place.formatted_address
                            })
                        }}
                        types={[]}
                        componentRestrictions={{ country: 'no' }}
                        value={this.state.inputText}
                        onChange={(e) => this.handleChange(e.target.value)}
                        filled={this.state.filled}
                    />
                    <Label filled={this.state.filled}>Hvor vil du reise til?</Label>
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

export default ToSearchField;
