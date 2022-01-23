import { appName } from "../../config/constants";
import {createAction } from "typesafe-actions";

import { IZoomCenter } from "./models";

/* Actions */
export const widgetName = "ZOOM_CENTER";

export const setZoomCenterAction = createAction(
    `${appName}/${widgetName}/SET_ZOOM`
  )<IZoomCenter>();