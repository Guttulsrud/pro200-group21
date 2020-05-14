import React from 'react';
import { Button } from '../elements/StyledExample'; // Her hentes Button (styled component) fra StyledExample
import Autosuggest from 'react-autosuggest';

const languages = [
    { name: 'Telthusbakken 10, 1337'},
    { name: 'Morroklubben 12, 0551'},
    { name: 'Morroklubben 15, 5012'},
    { name: 'Morroklubben 111, 0669'},
    { name: 'Telthusbakken 18, 4499'},

];

const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : languages.filter(lang =>
        lang.name.toLowerCase().slice(0, inputLength) === inputValue
    );
};

const getSuggestionValue = suggestion => suggestion.name;
const renderSuggestion = suggestion => (
    <div>
        {suggestion.name}
    </div>
);

class Example extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '',
            suggestions: []
        };
    }

    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    };

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: getSuggestions(value)
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render() {
        const { value, suggestions } = this.state;
        const inputProps = {
            placeholder: 'Hvor vil du?',
            value,
            onChange: this.onChange
        };
        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
            />
        );
    }
}

export default Example;
