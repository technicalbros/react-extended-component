import {Component as ReactComponent} from "react";
import {get} from "lodash";

export default function getState(component: ReactComponent, name: string, defaultValue: any): any {
    return get(component, `state.${name}`, defaultValue)
}
