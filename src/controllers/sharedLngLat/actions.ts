import { appName } from "../../config/constants";
import {createAction } from "typesafe-actions";

import { ICoordinates } from "./models";

/* Actions */
export const widgetName = "SHARED_COORDINATES";

export const setOriginLngAction = createAction(
`${appName}/${widgetName}/SET_ORIGIN_LNG`
)<ICoordinates>();

export const setOriginLatAction = createAction(
`${appName}/${widgetName}/SET_ORIGIN_LAT`
)<ICoordinates>();

export const setDestinationLngAction = createAction(
`${appName}/${widgetName}/SET_DESTINATION_LNG`
)<ICoordinates>();

export const setDestinationLatAction = createAction(
`${appName}/${widgetName}/SET_DESTINATION_LAT`
)<ICoordinates>();