import {Component as ReactComponent} from "react";
import updateState from "./updateState";

export default class Component extends ReactComponent {
    async updateState(name: string | object, value?: any) {
        return updateState(this, name, value);
    }
}
