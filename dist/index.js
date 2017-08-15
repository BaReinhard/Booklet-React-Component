(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', './valuedisplay', 'prop-types'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('./valuedisplay'), require('prop-types'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.valuedisplay, global.propTypes);
        global.index = mod.exports;
    }
})(this, function (exports, _react, _valuedisplay, _propTypes) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _valuedisplay2 = _interopRequireDefault(_valuedisplay);

    var _propTypes2 = _interopRequireDefault(_propTypes);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    };

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

    var style = {
        color: 'black',
        position: 'absolute',
        zIndex: 500,
        width: '400px'
    };

    var AutoComplete = function (_React$Component) {
        _inherits(AutoComplete, _React$Component);

        function AutoComplete(props, context) {
            _classCallCheck(this, AutoComplete);

            var _this = _possibleConstructorReturn(this, (AutoComplete.__proto__ || Object.getPrototypeOf(AutoComplete)).call(this, props, context));

            _this.openValues = function () {
                _this.setState({
                    displayValues: true,
                    running: true
                });
                setTimeout(function () {
                    _this.setState({
                        running: false
                    });
                }, 300);
            };

            _this.closeValues = function (e) {
                setTimeout(function () {
                    if (_this.state.running) {} else {
                        _this.setState({ displayValues: false });
                    }
                }, 150);
            };

            _this.filterValues = function (value) {
                var displayedValues = _this.props.values;
                displayedValues = _this.props.values.filter(function (val) {
                    return val.toLowerCase().includes(value.toLowerCase());
                });
                _this.setState({
                    displayedValues: displayedValues
                });
            };

            _this.onInput = function (event) {
                if (!_this.state.displayValues) {
                    _this.setState({
                        input: event.target.value,
                        displayValues: true
                    });
                } else {
                    _this.setState({ input: event.target.value });
                    setTimeout(function () {
                        _this.filterValues(_this.state.input);
                    }, 100);
                }
            };

            _this.onEnterPress = function (e) {
                if (e.key === 'Enter') {
                    _this.props.onClick(_this.state.displayedValues[0]);
                } else if (e.key === 'Escape') {
                    _this.closeValues();
                }
            };

            _this.onClick = function (e) {
                _this.props.onClick(e.target.innerText);
            };

            _this.state = {
                input: '',
                displayValues: false,
                displayedValues: _this.props.values
            };
            // Allow for Override of styles
            style = _extends({}, style, props.style);
            return _this;
        }
        /*eslint arrow-body-style: ["error", "always"]*/
        /*eslint-env es6*/


        _createClass(AutoComplete, [{
            key: 'render',
            value: function render() {
                return _react2.default.createElement(
                    'div',
                    {
                        style: style,
                        tabIndex: '0',
                        className: 'autocomplete-container',
                        onClick: this.openValues,
                        onBlur: this.closeValues
                    },
                    _react2.default.createElement('input', {
                        className: 'autocomplete-input',
                        style: { width: '400px' },
                        type: 'text',
                        name: 'me',
                        value: this.state.input,
                        onChange: this.onInput,
                        onKeyDown: this.onEnterPress
                    }),
                    _react2.default.createElement(_valuedisplay2.default, {
                        dropdownStyle: this.props.dropdownStyle,
                        displayValues: this.state.displayValues,
                        valuesStyle: this.props.valuesStyle,
                        displayedValues: this.state.displayedValues,
                        onClick: this.onClick
                    })
                );
            }
        }]);

        return AutoComplete;
    }(_react2.default.Component);

    exports.default = AutoComplete;

    AutoComplete.propTypes = {
        values: _propTypes2.default.array.isRequired,
        style: _propTypes2.default.object,
        dropdownStyle: _propTypes2.default.object,
        valuesStyle: _propTypes2.default.object,
        onClick: _propTypes2.default.func.isRequired
    };
});