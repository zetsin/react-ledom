"use strict";

exports.__esModule = true;
exports.useModel = exports.Consumer = exports.Provider = exports.Model = exports.Stores = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var __assign = void 0 && (void 0).__assign || function () {
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

var Stores = new Map();
exports.Stores = Stores;

var Model =
/** @class */
function () {
  function Model() {}

  Model.prototype.setState = function (data) {
    var _a;

    Object.assign(this.state, data);
    (_a = Stores.get(this.constructor)) === null || _a === void 0 ? void 0 : _a.setState(__assign({}, this));
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

  Stores.set(value.constructor, {
    context: context,
    setState: setState
  });
  return _react["default"].createElement(context.Provider, {
    value: state
  }, children);
};

var Provider = function Provider(_a) {
  var stores = _a.stores,
      children = _a.children;
  return stores.map(function (store) {
    return {
      context: (0, _react.createContext)(store),
      store: store
    };
  }).reduce(function (acc, _a) {
    var context = _a.context,
        store = _a.store;
    return _react["default"].createElement(ContextProvider, {
      context: context,
      value: store
    }, acc);
  }, _react["default"].createElement(_react["default"].Fragment, null, children));
};

exports.Provider = Provider;

var Consumer = function Consumer(_a) {
  var model = _a.model,
      children = _a.children;

  var _b;

  var context = (_b = Stores.get(model)) === null || _b === void 0 ? void 0 : _b.context;

  if (!context) {
    return null;
  }

  return _react["default"].createElement(context.Consumer, null, children);
};

exports.Consumer = Consumer;

var useModel = function useModel(model) {
  var _a;

  var context = (_a = Stores.get(model)) === null || _a === void 0 ? void 0 : _a.context;

  if (!context) {
    throw Error("404");
  }

  return (0, _react.useContext)(context);
};

exports.useModel = useModel;