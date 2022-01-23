import { createReducer, ActionType } from "typesafe-actions";

// Actions
import * as actions from "./actions";

import { IAddressState } from './models'


export type AddressFieldType = ActionType<typeof actions>;

/* Reducer */
const initialState: IAddressState  = {
    addressOrigin: '',
    addressDestination: ''
};

export const setAddressReducer = createReducer<IAddressState, AddressFieldType>(
    initialState
)
.handleAction(actions.setAddressOriginAction, (state, { payload }) => ({
    ...state,
    addressOrigin: payload,
}))
.handleAction(actions.setAddressDestinationAction, (state, { payload }) => ({
    ...state,
    addressDestination: payload,
}))