import React from 'react';
import PropTypes from 'prop-types';
import BookletPage from './booklet-page';
import Image from './shadow.png';
import Border from './shadow-top-back.png';
let pageStyle;
let bookletPage;
export default class Booklet extends React.Component {
    constructor(props) {
        super(props);
        bookletPage = {
            height: '250px',
            backgroundColor: 'white',
            width: '100%',
            top: '0',
            left: '0',
            position: 'absolute',
        };
        pageStyle = {
            position: 'relative',
            float: 'left',
            width: '50%',
            boxSizing: 'border-box',
            height: '250px',
            backgroundColor: 'yellow',
        };
    }

    componentWillReceiveProps(nextProps, nextState) {
        if (nextProps.flipPageIndex > this.props.flipPageIndex) {
            setTimeout(() => {
                this.refs['rightPage'].classList.remove('forward');
                this.refs['rightPage-middle'].classList.remove('inverted-backward');

                this.props.nextPage();
                // this.refs['rightPage-back'].style.display = 'block';
            }, 3005);
            // this.refs['rightPage-back'].style.display = 'none';
            this.refs['rightPage'].classList.add('forward');
            this.refs['rightPage-middle'].classList.add('inverted-backward');
        } else if (nextProps.flipPageIndex < this.props.flipPageIndex) {
            setTimeout(() => {
                this.refs['leftPage'].classList.remove('backward');
                this.refs['leftPage-middle'].classList.remove('inverted-forward');

                this.props.prevPage();
                // this.refs['leftPage-back'].style.display = 'block';
            }, 3500);
            // this.refs['leftPage-back'].style.display = 'none';

            this.refs['leftPage'].classList.add('backward');
            this.refs['leftPage-middle'].classList.add('inverted-forward');
        } else {
        }
    }
    componentDidMount() {
        this.refs['rightPage'].classList.remove('forward');
        this.refs['leftPage'].classList.remove('backward');
    }

    render() {
        return (
            <div
                style={{
                    width: '100%',
                    height: '250px',
                    color: 'black',
                    backgroundColor: 'rgba(255,0,0,0.5)',
                    padding: '5px',
                    margin: '0 auto',
                    borderWidth: '3px',
                    borderStyle: 'solid',
                    borderRadius: '3px',
                    borderImage: `url(${Border}) 25% round`,
                }}
                className="booklet"
            >
                <div style={Object.assign({}, pageStyle)}>
                    <div ref={'leftPage-back'} style={Object.assign({}, bookletPage, { zIndex: 1 })}>
                        <BookletPage
                            pageLocation={'right'}
                            pageContent={this.props.pages[this.props.index - 2]}
                            turnPage={this.nextPage}
                        />
                    </div>
                    <div
                        ref={'leftPage-middle'}
                        style={Object.assign({}, bookletPage, { zIndex: 0, transform: 'scaleX(-1)' })}
                    >
                        <BookletPage
                            pageLocation={'left'}
                            pageContent={this.props.pages[this.props.index - 1]}
                            turnPage={this.previousPage}
                        />
                    </div>
                    <div ref={'leftPage'} style={Object.assign({}, bookletPage, { zIndex: 2 })}>
                        <BookletPage
                            pageLocation={'left'}
                            pageContent={this.props.pages[this.props.index]}
                            turnPage={this.previousPage}
                        />
                    </div>
                </div>
                <img
                    src={Image}
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        margin: '0 auto',
                        width: '20px',
                        height: '250px',
                        zIndex: 4,
                        opacity: '0.7',
                    }}
                />
                <div style={Object.assign({}, pageStyle)}>
                    <div ref={'rightPage-back'} style={Object.assign({}, bookletPage, { zIndex: 0 })}>
                        <BookletPage
                            pageLocation={'right'}
                            pageContent={this.props.pages[this.props.index + 3]}
                            turnPage={this.nextPage}
                        />
                    </div>
                    <div
                        ref={'rightPage-middle'}
                        style={Object.assign({}, bookletPage, { zIndex: 2, transform: 'scaleX(-1)' })}
                    >
                        <BookletPage
                            pageLocation={'right'}
                            pageContent={this.props.pages[this.props.index + 2]}
                            turnPage={this.nextPage}
                        />
                    </div>
                    <div
                        ref={'rightPage'}
                        style={Object.assign({}, bookletPage, {
                            zIndex: 2,
                        })}
                    >
                        <BookletPage
                            pageLocation={'right'}
                            pageContent={this.props.pages[this.props.index + 1]}
                            turnPage={this.nextPage}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

Booklet.propTypes = {
    pages: PropTypes.array,
    index: PropTypes.number,
};
