(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', 'prop-types', './booklet-page', './shadow.png', './shadow-top-back.png'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('prop-types'), require('./booklet-page'), require('./shadow.png'), require('./shadow-top-back.png'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.propTypes, global.bookletPage, global.shadow, global.shadowTopBack);
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

            var _this = _possibleConstructorReturn(this, (Booklet.__proto__ || Object.getPrototypeOf(Booklet)).call(this, props));

            bookletPage = {
                height: '250px',
                backgroundColor: 'white',
                width: '100%',
                top: '0',
                left: '0',
                position: 'absolute'
            };
            pageStyle = {
                position: 'relative',
                float: 'left',
                width: '50%',
                boxSizing: 'border-box',
                height: '250px',
                backgroundColor: 'yellow'
            };
            return _this;
        }

        _createClass(Booklet, [{
            key: 'componentWillReceiveProps',
            value: function componentWillReceiveProps(nextProps, nextState) {
                var _this2 = this;

                if (nextProps.flipPageIndex > this.props.flipPageIndex) {
                    setTimeout(function () {
                        _this2.refs['rightPage'].classList.remove('forward');
                        _this2.refs['rightPage-middle'].classList.remove('inverted-backward');

                        _this2.props.nextPage();
                        // this.refs['rightPage-back'].style.display = 'block';
                    }, 3005);
                    // this.refs['rightPage-back'].style.display = 'none';
                    this.refs['rightPage'].classList.add('forward');
                    this.refs['rightPage-middle'].classList.add('inverted-backward');
                } else if (nextProps.flipPageIndex < this.props.flipPageIndex) {
                    setTimeout(function () {
                        _this2.refs['leftPage'].classList.remove('backward');
                        _this2.refs['leftPage-middle'].classList.remove('inverted-forward');

                        _this2.props.prevPage();
                        // this.refs['leftPage-back'].style.display = 'block';
                    }, 3500);
                    // this.refs['leftPage-back'].style.display = 'none';

                    this.refs['leftPage'].classList.add('backward');
                    this.refs['leftPage-middle'].classList.add('inverted-forward');
                } else {}
            }
        }, {
            key: 'componentDidMount',
            value: function componentDidMount() {
                this.refs['rightPage'].classList.remove('forward');
                this.refs['leftPage'].classList.remove('backward');
            }
        }, {
            key: 'render',
            value: function render() {
                return _react2.default.createElement(
                    'div',
                    {
                        style: {
                            width: '100%',
                            height: '250px',
                            color: 'black',
                            backgroundColor: 'rgba(255,0,0,0.5)',
                            padding: '5px',
                            margin: '0 auto',
                            borderWidth: '3px',
                            borderStyle: 'solid',
                            borderRadius: '3px',
                            borderImage: 'url(' + _shadowTopBack2.default + ') 25% round'
                        },
                        className: 'booklet'
                    },
                    _react2.default.createElement(
                        'div',
                        { style: Object.assign({}, pageStyle) },
                        _react2.default.createElement(
                            'div',
                            { ref: 'leftPage-back', style: Object.assign({}, bookletPage, { zIndex: 1 }) },
                            _react2.default.createElement(_bookletPage2.default, {
                                pageLocation: 'right',
                                pageContent: this.props.pages[this.props.index - 2],
                                turnPage: this.nextPage
                            })
                        ),
                        _react2.default.createElement(
                            'div',
                            {
                                ref: 'leftPage-middle',
                                style: Object.assign({}, bookletPage, { zIndex: 0, transform: 'scaleX(-1)' })
                            },
                            _react2.default.createElement(_bookletPage2.default, {
                                pageLocation: 'left',
                                pageContent: this.props.pages[this.props.index - 1],
                                turnPage: this.previousPage
                            })
                        ),
                        _react2.default.createElement(
                            'div',
                            { ref: 'leftPage', style: Object.assign({}, bookletPage, { zIndex: 2 }) },
                            _react2.default.createElement(_bookletPage2.default, {
                                pageLocation: 'left',
                                pageContent: this.props.pages[this.props.index],
                                turnPage: this.previousPage
                            })
                        )
                    ),
                    _react2.default.createElement('img', {
                        src: _shadow2.default,
                        style: {
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            margin: '0 auto',
                            width: '20px',
                            height: '250px',
                            zIndex: 4,
                            opacity: '0.7'
                        }
                    }),
                    _react2.default.createElement(
                        'div',
                        { style: Object.assign({}, pageStyle) },
                        _react2.default.createElement(
                            'div',
                            { ref: 'rightPage-back', style: Object.assign({}, bookletPage, { zIndex: 0 }) },
                            _react2.default.createElement(_bookletPage2.default, {
                                pageLocation: 'right',
                                pageContent: this.props.pages[this.props.index + 3],
                                turnPage: this.nextPage
                            })
                        ),
                        _react2.default.createElement(
                            'div',
                            {
                                ref: 'rightPage-middle',
                                style: Object.assign({}, bookletPage, { zIndex: 2, transform: 'scaleX(-1)' })
                            },
                            _react2.default.createElement(_bookletPage2.default, {
                                pageLocation: 'right',
                                pageContent: this.props.pages[this.props.index + 2],
                                turnPage: this.nextPage
                            })
                        ),
                        _react2.default.createElement(
                            'div',
                            {
                                ref: 'rightPage',
                                style: Object.assign({}, bookletPage, {
                                    zIndex: 2
                                })
                            },
                            _react2.default.createElement(_bookletPage2.default, {
                                pageLocation: 'right',
                                pageContent: this.props.pages[this.props.index + 1],
                                turnPage: this.nextPage
                            })
                        )
                    )
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