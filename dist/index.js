(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', 'prop-types', './booklet-page', './shadow.png', './shadow-top-back.png', '../index.css'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('prop-types'), require('./booklet-page'), require('./shadow.png'), require('./shadow-top-back.png'), require('../index.css'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.propTypes, global.bookletPage, global.shadow, global.shadowTopBack, global.index);
        global.index = mod.exports;
    }
})(this, function (exports, _react, _propTypes, _bookletPage, _shadow, _shadowTopBack) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _propTypes2 = _interopRequireDefault(_propTypes);

    var _bookletPage2 = _interopRequireDefault(_bookletPage);

    var _shadow2 = _interopRequireDefault(_shadow);

    var _shadowTopBack2 = _interopRequireDefault(_shadowTopBack);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var pageStyle = void 0;
    var bookletPage = void 0;

    var Booklet = function (_React$Component) {
        _inherits(Booklet, _React$Component);

        function Booklet(props) {
            _classCallCheck(this, Booklet);

            return _possibleConstructorReturn(this, (Booklet.__proto__ || Object.getPrototypeOf(Booklet)).call(this, props));
        }

        _createClass(Booklet, [{
            key: 'componentWillReceiveProps',
            value: function componentWillReceiveProps(nextProps, nextState) {
                var _this2 = this;

                this.refs['page3'].classList.remove('turn-back');
                this.refs['page3b'].classList.remove('turn-back-3b');
                this.refs['page4'].classList.remove('turn');
                this.refs['page1'].classList.remove('turn-open-1');
                if (nextProps.flipPageIndex > this.props.flipPageIndex) {
                    setTimeout(function () {
                        _this2.props.nextPage();
                        // this.refs['rightPage-back'].style.display = 'block';
                    }, 3005);
                    // this.refs['rightPage-back'].style.display = 'none';

                    this.refs['page3'].classList.add('turn-back');
                    this.refs['page3b'].classList.add('turn-back-3b');
                } else if (nextProps.flipPageIndex < this.props.flipPageIndex) {
                    console.log('this happened');
                    setTimeout(function () {
                        _this2.props.prevPage();
                    }, 3000);
                    this.refs['page4'].classList.add('turn');
                    this.refs['page1'].classList.add('turn-open-1');
                    // this.refs['leftPage-back'].style.display = 'none';
                } else {}
            }
        }, {
            key: 'componentDidMount',
            value: function componentDidMount() {}
        }, {
            key: 'render',
            value: function render() {
                return _react2.default.createElement(
                    'div',
                    { className: 'book booklet-container' },
                    _react2.default.createElement(
                        'div',
                        { ref: 'page2', className: 'pagelast booklet-next-right' },
                        _react2.default.createElement(_bookletPage2.default, {
                            pageLocation: 'right',
                            pageContent: this.props.pages[this.props.index + 3],
                            turnPage: this.nextPage
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        { ref: 'page3b', className: 'page booklet-next-left' },
                        _react2.default.createElement(_bookletPage2.default, {
                            pageLocation: 'right',
                            pageContent: this.props.pages[this.props.index + 2],
                            turnPage: this.nextPage
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        { ref: 'page3', style: {}, className: 'page3 booklet-current-right' },
                        _react2.default.createElement(_bookletPage2.default, {
                            pageLocation: 'right',
                            pageContent: this.props.pages[this.props.index + 1],
                            turnPage: this.nextPage
                        })
                    ),
                    _react2.default.createElement('div', { className: 'cover' }),
                    _react2.default.createElement(
                        'div',
                        { ref: 'page1', className: 'page booklet-previous-left' },
                        _react2.default.createElement(_bookletPage2.default, {
                            pageLocation: 'right',
                            pageContent: this.props.pages[this.props.index - 2],
                            turnPage: this.nextPage
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        { ref: 'page1', className: 'page1 booklet-previous-right' },
                        _react2.default.createElement(_bookletPage2.default, {
                            pageLocation: 'right',
                            pageContent: this.props.pages[this.props.index - 1],
                            turnPage: this.nextPage
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        { ref: 'page4', className: 'page booklet-current-left' },
                        _react2.default.createElement(_bookletPage2.default, {
                            pageLocation: 'right',
                            pageContent: this.props.pages[this.props.index],
                            turnPage: this.nextPage
                        })
                    ),
                    _react2.default.createElement('div', { className: 'cover turn' })
                );
            }
        }]);

        return Booklet;
    }(_react2.default.Component);

    exports.default = Booklet;


    Booklet.propTypes = {
        pages: _propTypes2.default.array,
        index: _propTypes2.default.number
    };
});