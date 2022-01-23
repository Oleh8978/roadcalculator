import { createReducer, ActionType } from "typesafe-actions";
import { all } from "redux-saga/effects";

// sagas
import { googleSearchSagas } from './sagas/googleSearchSagas';

// Actions
import * as actions from "./actions";

// Interfaces
import { IGoogleSearchState } from "./models";

export type GoogleSearchActionType = ActionType<typeof actions>;

export const gSearchSaga = function* () {
    yield all([
        googleSearchSagas()
    ]);
  };

/* Reducer */
const initialState: IGoogleSearchState = {
    loader: {
        isLoading: true
    },
    typeInput: 'Origin location (point)',
    data: {
        results: undefined,
        status: 'OK'
    }
};

export const gSearchReducer = createReducer<IGoogleSearchState, GoogleSearchActionType>(
  initialState
)
  .handleAction(actions.setLoadingStatus, (state, { payload }) => ({
    ...state,
    loader: {
        isLoading: payload.isLoading
    }
  }))
  .handleAction(actions.setInputType, (state, { payload }) => ({
    ...state,
    typeInput: payload
  }))
  .handleAction(
    actions.searchRequestAction.request,
    (state: IGoogleSearchState, { payload }): IGoogleSearchState => ({
      ...state,
      loader: {
          isLoading: true
      },
      data: {
          ...state.data
      }
    })
  )
  .handleAction(
    actions.searchRequestAction.success,
    (state: IGoogleSearchState, { payload }): IGoogleSearchState => ({
      ...state,
      loader: {
          isLoading: false
      },
      data: {
          ...payload
      }
    })
  );
  