import { appName } from "../../config/constants";
import {createAction } from "typesafe-actions";

import { IAddressState } from './models';

/* Actions */
export const widgetName = "ADDRESS_INPUT";

export const setAddressOriginAction = createAction(
    `${appName}/${widgetName}/SET_ADDRESS_ORIGIN`
  )<string>();

export const setAddressDestinationAction = createAction(
    `${appName}/${widgetName}/SET_ADDRESS_DESTINATION`
  )<string>();