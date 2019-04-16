import {Component as ReactComponent} from "react";

import {isFunction, isObject} from "lodash";

export default function updateState(component: ReactComponent, name: object | string | Function, value?: any) {
    if (isFunction(name)) {
        return new Promise(resolve => {
            component.setState(({...state}: any) => {
                name(state)
                return state;
            }, resolve)
        })
    } else if (isObject(name)) {
        return new Promise(resolve => {
            component.setState(name, resolve)
        })
    } else {
        return updateState(component, state => {
            eval(`state.${name} = value`)
        })
    }
}
