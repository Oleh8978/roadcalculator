import { appName } from "../../config/constants";
import {createAction, createAsyncAction} from "typesafe-actions";

import { IGoogleApiSearchResponse, ILoaderState, ISearchByCoords } from './models';

/* Actions */
export const widgetName = "GOOGLE_MAP_SEARCH";

export const setLoadingStatus = createAction(
    `${appName}/${widgetName}/SET_LOADING_STATUS`
  )<ILoaderState>();

export const setInputType = createAction(
  `${appName}/${widgetName}/SET_INPUT_TYPE`
)<string>();

export const searchRequestAction = createAsyncAction(
  `${appName}/${widgetName}/SEARCH_REQUEST`,
  `${appName}/${widgetName}/SEARCH_SUCCESS`,
  `${appName}/${widgetName}/SEARCH_FAILED`
)<string, IGoogleApiSearchResponse, IGoogleApiSearchResponse>();

export const searchRequestByCoordinatesAction = createAsyncAction(
  `${appName}/${widgetName}/SEARCH_REQUEST_BY_COORDINATES`,
  `${appName}/${widgetName}/SEARCH_SUCCESS_BY_COORDINATES`,
  `${appName}/${widgetName}/SEARCH_FAILED_BY_COORDINATES`
)<ISearchByCoords, IGoogleApiSearchResponse, IGoogleApiSearchResponse>();

