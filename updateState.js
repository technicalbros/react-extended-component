"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
function updateState(component, name, value) {
    if (lodash_1.isFunction(name)) {
        return new Promise(function (resolve) {
            component.setState(function (_a) {
                var state = __rest(_a, []);
                name(state);
                return state;
            }, resolve);
        });
    }
    else if (lodash_1.isObject(name)) {
        return new Promise(function (resolve) {
            component.setState(name, resolve);
        });
    }
    else {
        return updateState(component, function (state) {
            eval("state." + name + " = value");
        });
    }
}
exports.default = updateState;
