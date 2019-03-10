import {Component as ReactComponent} from "react";

import {each, isFunction, isObject} from "lodash";

export default function updateState(component: ReactComponent, name: object | string | Function, value?: any): void {
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
