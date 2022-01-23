import { appName } from "../../config/constants";
import {createAction } from "typesafe-actions";

import { IError } from "./model";

/* Actions */
export const widgetName = "ERROR_ADDER";

export const setNewError = createAction(
    `${appName}/${widgetName}/SET_ERROR`
  )<IError>();

export const removeError = createAction(
    `${appName}/${widgetName}/REMOVE_ERROR`
)<IError>();