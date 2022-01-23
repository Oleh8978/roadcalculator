import { createReducer, ActionType } from "typesafe-actions";

// Actions
import * as actions from "./actions";

// Interfaces
import { ISharedCoordinates } from "./models";

export type SharedCoordinatesType = ActionType<typeof actions>;

/* Reducer */
const initialState: ISharedCoordinates = {
    origin: {
        lat: '',
        lng: '',
    },
    destination: {
        lat: '',
        lng: '',
    }
};

export const sharedCoordinatesReducer = createReducer<ISharedCoordinates, SharedCoordinatesType>(
    initialState
)
.handleAction(actions.setOriginLatAction, (state, { payload }) => ({
    ...state,
    origin: {
        ...state.origin,
        lat: payload.lat
    }
}))
.handleAction(actions.setOriginLngAction, (state, { payload }) => ({
    ...state,
    origin: {
        ...state.origin,
        lng: payload.lng
    }
}))
.handleAction(actions.setDestinationLngAction, (state, { payload }) => ({
    ...state,
    destination: {
        ...state.destination,
        lng: payload.lng
    }
}))
.handleAction(actions.setDestinationLatAction, (state, { payload }) => ({
    ...state,
    destination: {
        ...state.destination,
        lat: payload.lat
    }
}))