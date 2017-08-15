import React from 'react';
import PropTypes from 'prop-types';

export default function ValueDisplay(props) {
    let comp;
    if (props.displayValues) {
        let style = {
            position: 'absolute',
            zIndex: '600',
            height: '300px',
            width: '400px',
            overflow: 'scroll',
            color: 'black',
            backgroundColor: 'white',
            borderBottomLeftRadius: '10px',
            borderBottomRightRadius: '10px',
            ...props.dropdownStyle,
        };
        let valuesDisplay = {
            padding: '4px',
            boxSizing: 'border-box',
            listStyle: 'none',
            ...props.valuesStyle,
        };

        comp = (
            <div name="valuedisplay" className="valuedisplay-container" style={style}>
                {props.displayedValues.map((value, i) => {
                    return (
                        <li
                            className="valuedisplay-item"
                            style={valuesDisplay}
                            onClick={props.onClick}
                            name={value}
                            key={value + i}
                        >
                            {value}
                        </li>
                    );
                })}
            </div>
        );
    } else {
        comp = <div />;
    }
    return comp;
}
ValueDisplay.propTypes = {
    dropdownStyle: PropTypes.object,
    displayValues: PropTypes.bool.isRequired,
    displayedValues: PropTypes.array.isRequired,
    valuesStyle: PropTypes.object,
    onClick: PropTypes.func.isRequired,
};
