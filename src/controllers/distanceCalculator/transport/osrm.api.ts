import { Config } from "../../../config/api";
import { handleErrors } from "../../../utils/API";

import { IosrmResponse } from '../models';

class API {

public async getDistanceByPints(latLng: string): Promise<IosrmResponse> {
  
    let googleRequestURL = new URL(Config.OSRM_API_ENDPOINT + latLng + '?overview=false');
    return handleErrors(
      fetch(googleRequestURL.toString(), {
        method: "GET",
      })
    );
}

}

export const OSRMApi = new API();