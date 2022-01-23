export interface ISharedCoordinates {
    origin: ICoordinates;
    destination: ICoordinates
}

export interface ICoordinates {
    lat: string;
    lng: string;
}