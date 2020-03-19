var __assign = this && this.__assign || function () {
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

import React, { createContext, useContext, useState } from 'react';
export var Stores = new Map();

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

export { Model };
;

var ContextProvider = function ContextProvider(_a) {
  var context = _a.context,
      value = _a.value,
      children = _a.children;

  var _b = useState(value),
      state = _b[0],
      setState = _b[1];

  Stores.set(value.constructor, {
    context: context,
    setState: setState
  });
  return React.createElement(context.Provider, {
    value: state
  }, children);
};

export var Provider = function Provider(_a) {
  var stores = _a.stores,
      children = _a.children;
  return stores.map(function (store) {
    return {
      context: createContext(store),
      store: store
    };
  }).reduce(function (acc, _a) {
    var context = _a.context,
        store = _a.store;
    return React.createElement(ContextProvider, {
      context: context,
      value: store
    }, acc);
  }, React.createElement(React.Fragment, null, children));
};
export var Consumer = function Consumer(_a) {
  var model = _a.model,
      children = _a.children;

  var _b;

  var context = (_b = Stores.get(model)) === null || _b === void 0 ? void 0 : _b.context;

  if (!context) {
    return null;
  }

  return React.createElement(context.Consumer, null, children);
};
export var useModel = function useModel(model) {
  var _a;

  var context = (_a = Stores.get(model)) === null || _a === void 0 ? void 0 : _a.context;

  if (!context) {
    throw Error("404");
  }

  return useContext(context);
};