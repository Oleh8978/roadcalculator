import { Config } from "../../../config/api";
import { handleErrors } from "../../../utils/API";

import { IGoogleApiSearchResponse } from '../models';

class API {

public async getListOfGeoObjectsByApi(values: string): Promise<IGoogleApiSearchResponse> {
  
    let googleRequestURL = new URL(Config.GOOGLE_SELECT_SEARCH_ENDPOINT + encodeURIComponent(values) + '&key=' + Config.GOOGLE_GEO_API_KEY + '&language=en');
    return handleErrors(
      fetch(googleRequestURL.toString(), {
        method: "GET",
      })
    );
}

public async getListOfGeoObjectsByApiLngLat(latLng: string): Promise<IGoogleApiSearchResponse> {
  
  let googleRequestURL = new URL(Config.GOOGLE_SELECT_SEARCH_ENDPOINT + latLng + '&key=' + Config.GOOGLE_GEO_API_KEY +'&language=en');
  return handleErrors(
    fetch(googleRequestURL.toString(), {
      method: "GET",
    })
  );
}

}

export const GoogleSearchAPI = new API();