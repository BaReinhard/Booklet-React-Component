import React from 'react';
import PropTypes from 'prop-types';
import Border from './shadow-top-back.png';
import BackgroundPage from './tan-sponged-background.png';

export default function BookletPage(props) {
    let content;
    if (props.pageLocation === 'left') {
        content = (
            <div
                style={Object.assign(
                    {},
                    {
                        background: `url(${BackgroundPage}) `,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        height: '250px',
                        boxShadow: '10px 5px 15px #000',
                    },
                    props.style,
                )}
                id={props.customId}
            >
                {props.pageContent}
            </div>
        );
    } else {
        content = (
            <div
                style={Object.assign(
                    {},
                    {
                        background: `url(${BackgroundPage}) `,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        height: '250px',
                        boxShadow: '10px 5px 15px #000',
                    },
                    props.style,
                )}
                id={props.customId}
            >
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
