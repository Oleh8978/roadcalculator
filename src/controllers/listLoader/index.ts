import { createReducer, ActionType } from "typesafe-actions";

// Actions
import * as actions from "./actions";

// Interfaces
import { ILoaderState } from "./models";

export type LoaderTypeReducer = ActionType<typeof actions>;

/* Reducer */
const initialState: ILoaderState = {
    loader: false
};

export const setLoaderReducer = createReducer<ILoaderState, LoaderTypeReducer>(
    initialState
)
  .handleAction(actions.setSmallLoader, (state, { payload }) => ({
    loader: payload.loader
}))