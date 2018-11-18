import { Component as ReactComponent } from "react";
export declare function updateState(component: ReactComponent, name: object | string | Function, value?: any): void;
export declare class Component extends ReactComponent {
    updateState(name: string | object, value?: any): void;
}
