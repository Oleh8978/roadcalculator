import { createReducer, ActionType } from "typesafe-actions";

// Actions
import * as actions from "./actions";

// Interfaces
import { IDropdownState } from "./models";

export type DropDownType = ActionType<typeof actions>;

/* Reducer */
const initialState: IDropdownState = {
    isOpened: false 
};

export const setDropDownReducer = createReducer<IDropdownState, DropDownType>(
    initialState
)
  .handleAction(actions.setDropdown, (state, { payload }) => ({
    ...payload
}))