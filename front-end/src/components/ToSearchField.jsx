import React from 'react';
import { CloseIcon } from './Icons/CloseIcon';
import { Label, StyledAC } from '../elements/inputs/StyledAutocomplete';

class ToSearchField extends React.Component {

    state = {
        filled: false,
        inputText: '',

    };


    componentDidMount() {
        if (this.props.toLoc) {
            this.setState({
                inputText: this.props.toLoc,
                filled: true
            })
        }
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

    clearInput = () => {
        this.setState({ inputText: '', filled: false }, () => this.props.handleRemoveTo());

    };



    render() {
        return (
            <React.Fragment>
                <div className='search-form'>
                    <span class="toInputIcon"><img height="24px" width="24px" src="/images/pin-48-to.png"></img></span>
                    <StyledAC
                        placeholder={''}

                        onPlaceSelected={(place) => {
                            const { geometry, formatted_address } = place;
                            this.props.handleInputSelect(geometry.location.lat(), geometry.location.lng());
                            this.setState({
                                inputText: formatted_address
                            })
                            this.props.insertTo(this.state.inputText)
                        }}
                        types={[]}
                        componentRestrictions={{ country: 'no' }}
                        value={this.state.inputText}
                        onChange={(e) => this.handleChange(e.target.value)}
                        filled={this.state.filled ? this.state.inputText : undefined}


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
