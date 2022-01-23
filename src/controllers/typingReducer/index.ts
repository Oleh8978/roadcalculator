import { createReducer, ActionType } from "typesafe-actions";

// Actions
import * as actions from "./actions";

// Interfaces
import { ITypingState } from "./models";

export type FeeTypeSelector = ActionType<typeof actions>;

/* Reducer */
const initialState: ITypingState = {
    typingTimeOut: 0,
};

export const setTypingReducer = createReducer<ITypingState, FeeTypeSelector>(
    initialState
)
  .handleAction(actions.setTypingTimeOut, (state, { payload }) => ({
    typingTimeOut: payload.typingTimeOut
}))