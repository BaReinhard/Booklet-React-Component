import React from 'react';
import ValuesDisplay from './valuedisplay';
import PropTypes from 'prop-types';

let style = {
    color: 'black',
    position: 'absolute',
    zIndex: 500,
    width: '400px',
};
export default class AutoComplete extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            input: '',
            displayValues: false,
            displayedValues: this.props.values,
        };
        // Allow for Override of styles
        style = { ...style, ...props.style };
    }
    /*eslint arrow-body-style: ["error", "always"]*/
    /*eslint-env es6*/
    openValues = () => {
        this.setState({
            displayValues: true,
            running: true,
        });
        setTimeout(() => {
            this.setState({
                running: false,
            });
        }, 300);
    };
    closeValues = e => {
        setTimeout(() => {
            if (this.state.running) {
            } else {
                this.setState({ displayValues: false });
            }
        }, 150);
    };

    filterValues = value => {
        let displayedValues = this.props.values;
        displayedValues = this.props.values.filter(val => {
            return val.toLowerCase().includes(value.toLowerCase());
        });
        this.setState({
            displayedValues: displayedValues,
        });
    };
    onInput = event => {
        if (!this.state.displayValues) {
            this.setState({
                input: event.target.value,
                displayValues: true,
            });
        } else {
            this.setState({ input: event.target.value });
            setTimeout(() => {
                this.filterValues(this.state.input);
            }, 100);
        }
    };
    onEnterPress = e => {
        if (e.key === 'Enter') {
            this.props.onClick(this.state.displayedValues[0]);
        } else if (e.key === 'Escape') {
            this.closeValues();
        }
    };
    onClick = e => {
        this.props.onClick(e.target.innerText);
    };
    render() {
        return (
            <div
                style={style}
                tabIndex="0"
                className="autocomplete-container"
                onClick={this.openValues}
                onBlur={this.closeValues}
            >
                <input
                    className="autocomplete-input"
                    style={{ width: '400px' }}
                    type="text"
                    name="me"
                    value={this.state.input}
                    onChange={this.onInput}
                    onKeyDown={this.onEnterPress}
                />
                <ValuesDisplay
                    dropdownStyle={this.props.dropdownStyle}
                    displayValues={this.state.displayValues}
                    valuesStyle={this.props.valuesStyle}
                    displayedValues={this.state.displayedValues}
                    onClick={this.onClick}
                />
            </div>
        );
    }
}
AutoComplete.propTypes = {
    values: PropTypes.array.isRequired,
    style: PropTypes.object,
    dropdownStyle: PropTypes.object,
    valuesStyle: PropTypes.object,
    onClick: PropTypes.func.isRequired,
};
