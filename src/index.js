import React from 'react';
import PropTypes from 'prop-types';
import BookletPage from './booklet-page';
import Image from './shadow.png';
import Border from './shadow-top-back.png';
import '../index.css';
let pageStyle;
let bookletPage;
export default class Booklet extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps, nextState) {
        this.refs['page3'].classList.remove('turn-back');
        this.refs['page3b'].classList.remove('turn-back-3b');
        this.refs['page4'].classList.remove('turn');
        this.refs['page1'].classList.remove('turn-open-1');
        if (nextProps.flipPageIndex > this.props.flipPageIndex) {
            setTimeout(() => {
                this.props.nextPage();
                // this.refs['rightPage-back'].style.display = 'block';
            }, 3005);
            // this.refs['rightPage-back'].style.display = 'none';

            this.refs['page3'].classList.add('turn-back');
            this.refs['page3b'].classList.add('turn-back-3b');
        } else if (nextProps.flipPageIndex < this.props.flipPageIndex) {
            console.log('this happened');
            setTimeout(() => {
                this.props.prevPage();
            }, 3000);
            this.refs['page4'].classList.add('turn');
            this.refs['page1'].classList.add('turn-open-1');
            // this.refs['leftPage-back'].style.display = 'none';
        } else {
        }
    }
    componentDidMount() {}

    render() {
        return (
            <div className="book booklet-container">
                {/* Right Page on Next" */}
                <div ref={'page2'} className="pagelast booklet-next-right">
                    <BookletPage
                        pageLocation={'right'}
                        pageContent={this.props.pages[this.props.index + 3]}
                        turnPage={this.nextPage}
                    />
                </div>
                {/* Left Page on Next */}
                <div ref={'page3b'} className="page booklet-next-left">
                    <BookletPage
                        pageLocation={'right'}
                        pageContent={this.props.pages[this.props.index + 2]}
                        turnPage={this.nextPage}
                    />
                </div>
                {/* Right Page on Current */}
                <div ref={'page3'} style={{}} className="page3 booklet-current-right">
                    <BookletPage
                        pageLocation={'right'}
                        pageContent={this.props.pages[this.props.index + 1]}
                        turnPage={this.nextPage}
                    />
                </div>

                <div className="cover" />
                {/* Left Page on Previous */}
                <div ref={'page1'} className="page booklet-previous-left">
                    <BookletPage
                        pageLocation={'right'}
                        pageContent={this.props.pages[this.props.index - 2]}
                        turnPage={this.nextPage}
                    />
                </div>
                {/* Right Page on Previous */}
                <div ref={'page1'} className="page1 booklet-previous-right">
                    <BookletPage
                        pageLocation={'right'}
                        pageContent={this.props.pages[this.props.index - 1]}
                        turnPage={this.nextPage}
                    />
                </div>
                {/* Left Page on Current */}
                <div ref={'page4'} className="page booklet-current-left">
                    <BookletPage
                        pageLocation={'right'}
                        pageContent={this.props.pages[this.props.index]}
                        turnPage={this.nextPage}
                    />
                </div>

                <div className="cover turn" />
            </div>
        );
    }
}

Booklet.propTypes = {
    pages: PropTypes.array,
    index: PropTypes.number,
};
