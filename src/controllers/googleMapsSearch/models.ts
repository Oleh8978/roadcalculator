
export interface IGoogleSearchState {
    loader: ILoaderState;
    typeInput: string;
    data: IGoogleApiSearchResponse;
}

export interface ILoaderState {
    isLoading: boolean;
}

export interface IGoogleApiSearchResponse {
    results: IGoogleApiResult[] | undefined,
    status: string,
}

export interface IGoogleApiResult {
    address_components: IAdrressComponent[],
    formatted_address: string,
    geometry: IGeometry,
    place_id: string,
    plus_code: IPlusCode,
    types: string[],
}

export interface IAdrressComponent {
    long_name: string,
    short_name: string | number,
    types: string[],
}

export interface IGeometry {
    location: ILocation,
    location_type: string,
    viewport: iViewPort
}

export interface ILocation {
    lat: number,
    lng: number
}

export interface iViewPort {
    northeast: ILocation,
    southwest: ILocation
}

export interface IPlusCode {
    compound_code: string,
    global_code: string
}

export interface ISearchByCoords {
    type: string,
    coords: string,
}