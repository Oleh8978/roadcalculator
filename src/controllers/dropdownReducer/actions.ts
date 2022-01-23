import { appName } from "../../config/constants";
import {createAction } from "typesafe-actions";

import { IDropdownState } from "./models";

/* Actions */
export const widgetName = "DROPDOWN_SELECT";

export const setDropdown = createAction(
    `${appName}/${widgetName}/SET_ITEM`
  )<IDropdownState>();