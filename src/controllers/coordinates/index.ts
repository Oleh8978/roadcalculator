import { createReducer, ActionType } from "typesafe-actions";

// Actions
import * as actions from "./actions";

// Interfaces
import { ICoordinatesState } from "./models";

export type CoordinatesType = ActionType<typeof actions>;

/* Reducer */
const initialState: ICoordinatesState = {
    origin: null,
    destination: null,
};

export const coordinatesReducer = createReducer<ICoordinatesState, CoordinatesType>(
    initialState
)
.handleAction(actions.setOriginAction, (state, { payload }) => ({
    ...state,
    origin: {...payload}
}))
.handleAction(actions.setDestination, (state, { payload }) => ({
    ...state,
    destination: {...payload}
}))
