import { appName } from "../../config/constants";
import { createAction } from "typesafe-actions";

import { IGoogleApiResult} from "../googleMapsSearch/models";

/* Actions */
export const widgetName = "COORDINATE_HANDLER";

export const setOriginAction = createAction(
  `${appName}/${widgetName}/SET_ORIGIN`
)<IGoogleApiResult>();

export const setDestination = createAction(
  `${appName}/${widgetName}/SET_DESTINATION`
)<IGoogleApiResult>();
