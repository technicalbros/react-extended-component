import {Component as ReactComponent} from "react";
import {isObject, each, isFunction, get} from "lodash";

export function updateState(component: ReactComponent, name: object | string | Function, value?: any): void {
    if (isFunction(name)) {
        component.setState(({...state}: any) => {
            name(state)
            return state;
        })
    } else if (isObject(name)) {
        // @ts-ignore
        each(name, (v, key) => updateState(component, key, v))
    } else {
        updateState(component, state => {
            eval(`state.${name} = value`)
        })
    }
}

export function getState(component: ReactComponent, name: string, defaultValue: any): any {
    return get(component, `state.${name}`, defaultValue)
}

export class Component extends ReactComponent {
    updateState(name: string | object, value?: any): void {
        return updateState(this, name, value);
    }
}