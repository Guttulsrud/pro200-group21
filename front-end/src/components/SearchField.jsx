import React from 'react';
import { Input } from '../elements/inputs/StyledInput';
import { ArrowForwardIcon } from '../components/Svg/ArrowForwardIcon';
import { CloseIcon } from '../components/Svg/CloseIcon';

class SearchField extends React.Component {
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
                <form className="search-form">
                    <Input
                        placeholder='Hvor vil du reise fra?'
                        filled={this.state.filled}
                        onChange={(e) => this.handleFilled(e.target.value)}
                    />
                    <button onClick={this.state.filled ? <ArrowForwardIcon /> : <CloseIcon />} className="search-btn"></button>
                </form>
            </React.Fragment>
        );
    }
};

export default SearchField;
