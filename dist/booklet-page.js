(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', 'prop-types', './shadow-top-back.png', './tan-sponged-background.png'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('prop-types'), require('./shadow-top-back.png'), require('./tan-sponged-background.png'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.propTypes, global.shadowTopBack, global.tanSpongedBackground);
        global.bookletPage = mod.exports;
    }
})(this, function (exports, _react, _propTypes, _shadowTopBack, _tanSpongedBackground) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = BookletPage;

    var _react2 = _interopRequireDefault(_react);

    var _propTypes2 = _interopRequireDefault(_propTypes);

    var _shadowTopBack2 = _interopRequireDefault(_shadowTopBack);

    var _tanSpongedBackground2 = _interopRequireDefault(_tanSpongedBackground);

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
                {
                    style: Object.assign({}, {
                        background: 'url(' + _tanSpongedBackground2.default + ') ',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        height: '250px',
                        boxShadow: '10px 5px 15px #000'
                    }, props.style),
                    id: props.customId
                },
                props.pageContent
            );
        } else {
            content = _react2.default.createElement(
                'div',
                {
                    style: Object.assign({}, {
                        background: 'url(' + _tanSpongedBackground2.default + ') ',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        height: '250px',
                        boxShadow: '10px 5px 15px #000'
                    }, props.style),
                    id: props.customId
                },
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