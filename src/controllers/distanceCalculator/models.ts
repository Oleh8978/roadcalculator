import { ILoaderState } from "../googleMapsSearch/models";

export interface IosrmResponse {
    code: string,
    waypoints: IWaypoint[],
    routes: IRoute[]
}

export interface IWaypoint {
    hint: string,
    distance: number,
    location: string[],
    name: string,
}

export interface IRoute {
    legs: ILeg[],
    weight_name: string,
    weight: number,
    distance: number,
    duration: number,
}

export interface ILeg {
    steps: any[],
    weight: number,
    distance: number,
    summary: string,
    duration: number,
}

export interface IRouteCalculatorState {
    response: IosrmResponse,
    loader: ILoaderState
}