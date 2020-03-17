"use strict";

exports.__esModule = true;
exports.useModel = exports.Consumer = exports.Provider = exports.Model = exports.Store = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __assign = undefined && undefined.__assign || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Store = exports.Store = new Map();
var Model = /** @class */function () {
    function Model() {}
    Model.prototype.setState = function (data) {
        var _a;
        Object.assign(this.state, data);
        (_a = Store.get(this.constructor)) === null || _a === void 0 ? void 0 : _a.setState(__assign({}, this));
    };
    ;
    return Model;
}();
exports.Model = Model;

;
var ContextProvider = function ContextProvider(_a) {
    var context = _a.context,
        value = _a.value,
        children = _a.children;
    var _b = (0, _react.useState)(value),
        state = _b[0],
        setState = _b[1];
    Store.set(value.constructor, {
        context: context,
        setState: setState
    });
    return _react2.default.createElement(context.Provider, { value: state }, children);
};
var Provider = exports.Provider = function Provider(_a) {
    var values = _a.values,
        children = _a.children;
    return values.map(function (value) {
        return {
            context: (0, _react.createContext)(value),
            value: value
        };
    }).reduce(function (acc, _a) {
        var context = _a.context,
            value = _a.value;
        return _react2.default.createElement(ContextProvider, { context: context, value: value }, acc);
    }, _react2.default.createElement(_react2.default.Fragment, null, children));
};
var Consumer = exports.Consumer = function Consumer(_a) {
    var model = _a.model,
        children = _a.children;
    var _b;
    var context = (_b = Store.get(model)) === null || _b === void 0 ? void 0 : _b.context;
    if (!context) {
        return null;
    }
    return _react2.default.createElement(context.Consumer, null, children);
};
var useModel = exports.useModel = function useModel(model) {
    var _a;
    var context = (_a = Store.get(model)) === null || _a === void 0 ? void 0 : _a.context;
    if (!context) {
        throw Error("404");
    }
    return (0, _react.useContext)(context);
};