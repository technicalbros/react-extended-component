import {Component as ReactComponent} from "react";
import {updateState} from "./updateState";

export class Component extends ReactComponent {
    updateState(name: string | object, value?: any): void {
        return updateState(this, name, value);
    }
}
