import { createReducer, ActionType } from "typesafe-actions";

// Actions
import * as actions from "./actions";

// Interfaces
import { IZoomCenter } from "./models";

export type ZoomCenterType = ActionType<typeof actions>;

/* Reducer */
const initialState: IZoomCenter = {
    zoom: 5,
    center: {
        lat: 0,
        lng: 0,
    }
};

export const setZoomCenter = createReducer<IZoomCenter, ZoomCenterType>(
    initialState
)
  .handleAction(actions.setZoomCenterAction, (state, { payload }) => ({
    ...payload
}))