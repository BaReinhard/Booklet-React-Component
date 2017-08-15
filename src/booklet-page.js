import React from 'react';
import PropTypes from 'prop-types';

export default function BookletPage(props) {
    let content;
    if (props.pageLocation === 'left') {
        content = (
            <div style={props.style} id={props.customId}>
                {props.pageContent}
            </div>
        );
    } else {
        content = (
            <div style={props.style} id={props.customId}>
                {props.pageContent}
            </div>
        );
    }
    return content;
}
BookletPage.propTypes = {
    pageContent: PropTypes.element,
    pageLocation: PropTypes.string,
};
