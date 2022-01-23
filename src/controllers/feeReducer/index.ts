import { createReducer, ActionType } from "typesafe-actions";

// Actions
import * as actions from "./actions";

// Interfaces
import { ITransport } from "../../interfaces/ITransport";

export type FeeTypeSelector = ActionType<typeof actions>;

/* Reducer */
const initialState: ITransport = {
    price: 0.50,
    name: 'Truck'
};

export const setFeeReducer = createReducer<ITransport, FeeTypeSelector>(
    initialState
)
  .handleAction(actions.setFeeAction, (state, { payload }) => ({
    ...payload
}))