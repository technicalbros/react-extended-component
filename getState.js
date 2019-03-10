"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
function getState(component, name, defaultValue) {
    return lodash_1.get(component, "state." + name, defaultValue);
}
exports.default = getState;
