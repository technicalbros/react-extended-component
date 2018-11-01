"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var lodash_1 = require("lodash");
function updateState(component, name, value) {
    var key = arguments[0];
    if (lodash_1.isObject(key)) {
        component.setState(function (state) {
            var keys = key;
            lodash_1.each(keys, function () {
                var v = arguments[1];
                eval("state." + v + " = arguments[0]");
            });
            return state;
        });
    }
    else {
        var value_1 = arguments[1];
        component.setState(function (state) {
            eval("arguments[0]." + key + " = value");
            return state;
        });
    }
}
exports.updateState = updateState;
var Component = /** @class */ (function (_super) {
    __extends(Component, _super);
    function Component() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Component.prototype.updateState = function (name, value) {
        return updateState(this, name, value);
    };
    return Component;
}(react_1.Component));
exports.Component = Component;
//# sourceMappingURL=index.js.map