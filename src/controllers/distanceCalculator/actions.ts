import { appName } from "../../config/constants";
import {createAction, createAsyncAction} from "typesafe-actions";

// interfaces
import { IosrmResponse } from './models';
import { ILoaderState } from "../googleMapsSearch/models";

/* Actions */
export const widgetName = "OSRM_API_CALCULATION";

export const setLoadingStatus = createAction(
    `${appName}/${widgetName}/SET_LOADING_STATUS`
  )<ILoaderState>();

export const checkPointsAction = createAsyncAction(
  `${appName}/${widgetName}/SEARCH_REQUEST`,
  `${appName}/${widgetName}/SEARCH_SUCCESS`,
  `${appName}/${widgetName}/SEARCH_FAILED`
)<string, IosrmResponse, IosrmResponse>();

