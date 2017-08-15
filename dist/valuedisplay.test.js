(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['expect', 'react', 'enzyme', 'react-addons-test-utils', './valuedisplay'], factory);
    } else if (typeof exports !== "undefined") {
        factory(require('expect'), require('react'), require('enzyme'), require('react-addons-test-utils'), require('./valuedisplay'));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.expect, global.react, global.enzyme, global.reactAddonsTestUtils, global.valuedisplay);
        global.valuedisplayTest = mod.exports;
    }
})(this, function (_expect, _react, _enzyme, _reactAddonsTestUtils, _valuedisplay) {
    'use strict';

    var _expect2 = _interopRequireDefault(_expect);

    var _react2 = _interopRequireDefault(_react);

    var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

    var _valuedisplay2 = _interopRequireDefault(_valuedisplay);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var props = {};
    function setup(bool) {
        props = {
            onClick: function onClick(event) {
                return event.target.innerText;
            },
            dropdownStyle: { backgroundColor: 'grey' },
            displayValues: bool,
            displayedValues: [1, 2, 3, 4, 5, 6]
        };
        return (0, _enzyme.shallow)(_react2.default.createElement(_valuedisplay2.default, props));
    }
    describe('ValueDisplay Pop Up Testing', function () {
        it('Testing Proper Children are rendered based on array given', function () {
            var wrapper = setup(true);

            // Testing Each List Item OnClick function to return the proper value
            for (var i = 0; i < wrapper.props().children.length; i++) {
                var fakeEvent = {
                    target: {
                        innerText: props.displayedValues[i]
                    }
                };
                (0, _expect2.default)(wrapper.props().children[i].props.onClick(fakeEvent)).toEqual(wrapper.props().children[i].props.children);
            }
            (0, _expect2.default)(wrapper.props().children.length).toBe(props.displayedValues.length);
            (0, _expect2.default)(wrapper.props().className).toBe('valuedisplay-container');
        });
        it('Testing Display is correctly rendered on bool', function () {
            var wrapper = setup(false);
            (0, _expect2.default)(wrapper.props()).toEqual({});
            wrapper = setup(true);
            (0, _expect2.default)(wrapper.props().children.length).toBe(props.displayedValues.length);
        });
    });
});