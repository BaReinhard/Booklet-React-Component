(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', 'prop-types'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('prop-types'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.propTypes);
        global.bookletPage = mod.exports;
    }
})(this, function (exports, _react, _propTypes) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = BookletPage;

    var _react2 = _interopRequireDefault(_react);

    var _propTypes2 = _interopRequireDefault(_propTypes);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function BookletPage(props) {
        var content = void 0;
        if (props.pageLocation === 'left') {
            content = _react2.default.createElement(
                'div',
                { style: props.style, id: props.customId },
                props.pageContent
            );
        } else {
            content = _react2.default.createElement(
                'div',
                { style: props.style, id: props.customId },
                props.pageContent
            );
        }
        return content;
    }
    BookletPage.propTypes = {
        pageContent: _propTypes2.default.element,
        pageLocation: _propTypes2.default.string
    };
});