import React from 'react';
import PropTypes from 'prop-types';
import Border from './shadow-top-back.png';
import BackgroundPage from './tan-sponged-background.png';

export default function BookletPage(props) {
    let content;

    content = (
        <div style={Object.assign({}, { textAlign: 'left', alignContent: 'left' }, props.style)} id={props.customId}>
            {props.pageContent}
        </div>
    );

    return content;
}
BookletPage.propTypes = {
    pageContent: PropTypes.element,
    pageLocation: PropTypes.string,
};
