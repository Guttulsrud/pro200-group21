import React from 'react';
import {CloseIcon} from './Icons/CloseIcon';
import {Label, StyledAC} from '../elements/inputs/StyledAutocomplete';

class FromSearchField extends React.Component {

    state = {
        filled: false,
        inputText: '',
    };


    componentDidUpdate(prevProps) {
        if (
            this.props.fromLoc != null &&
            prevProps.fromLoc !== this.props.fromLoc
        ) {
            this.setState({
                inputText: this.props.fromLoc,
                filled: true,
            });
        }
    }

    handleChange = (value) => {
        this.setState({inputText: value});

        if (value !== '') {
            this.setState({filled: true});
        } else {
            this.setState({filled: false});
        }
    };

    clearInput = () => {
        this.setState({inputText: '', filled: false}, () => this.props.handleRemoveFrom());
    };

    render() {
        return (
            <React.Fragment>
                <div className='search-form'>
                    <StyledAC
                        placeholder={''}
                        onPlaceSelected={(place) => {
                            const {geometry, formatted_address} = place;
                            this.props.handleInputSelect(geometry.location.lat(), geometry.location.lng());
                            this.setState({
                                inputText: formatted_address
                            });
                            this.props.insertFrom(this.state.inputText)
                        }}
                        types={[]}
                        componentRestrictions={{country: 'no'}}
                        value={this.state.inputText}
                        onChange={(e) => this.handleChange(e.target.value)}

                        filled={this.state.filled ? this.state.inputText : undefined}
                    />
                    <Label filled={this.state.filled}>Hvor vil du reise fra?</Label>
                    {this.state.filled && (
                        <button onClick={this.clearInput} className='search-btn'>
                            <CloseIcon/>
                        </button>
                    )}
                </div>
            </React.Fragment>
        );
    }
}

export default FromSearchField;
