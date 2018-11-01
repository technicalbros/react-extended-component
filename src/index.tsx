import {Component as ReactComponent} from "react";
import {isObject, each} from "lodash";

export function updateState(component: ReactComponent, name: string | Object, value?: any): void {
    const key = arguments[0];
    if (isObject(key)) {
        component.setState((state: any) => {
            const keys: any = key;
            each(keys, function () {
                const v = arguments[1];
                eval(`state.${v} = arguments[0]`);
            })
            return state;
        })
    } else {
        const value: any = arguments[1];
        component.setState((state: any) => {
            eval(`arguments[0].${key} = value`);
            return state;
        })
    }
}

export class Component extends ReactComponent {
    updateState(name: string | object, value?: any): void {
        return updateState(this, name, value);
    }
}