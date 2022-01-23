import { appName } from "../../config/constants";
import {createAction } from "typesafe-actions";

import { ITransport } from "../../interfaces/ITransport";

/* Actions */
export const widgetName = "FEE_SELECT";

export const setFeeAction = createAction(
    `${appName}/${widgetName}/SET_FEE`
  )<ITransport>();