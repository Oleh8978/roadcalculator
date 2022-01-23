import { appName } from "../../config/constants";
import {createAction } from "typesafe-actions";

import { ILoaderState } from "./models";

/* Actions */
export const widgetName = "SMALL_LOADER";

export const setSmallLoader = createAction(
    `${appName}/${widgetName}/SET_LOADER`
  )<ILoaderState>();