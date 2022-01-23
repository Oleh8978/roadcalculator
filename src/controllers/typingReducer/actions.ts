import { appName } from "../../config/constants";
import {createAction } from "typesafe-actions";

import { ITypingState } from "./models";

/* Actions */
export const widgetName = "TYPING_TIMEOUT";

export const setTypingTimeOut = createAction(
    `${appName}/${widgetName}/SET_TYPING`
  )<ITypingState>();