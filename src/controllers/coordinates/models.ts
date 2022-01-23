import { IGoogleApiResult } from "../googleMapsSearch/models";

export interface ICoordinatesState {
    origin: IGoogleApiResult | null;
    destination: IGoogleApiResult | null;
}