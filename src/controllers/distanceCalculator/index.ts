import { createReducer, ActionType } from "typesafe-actions";
import { all } from "redux-saga/effects";

// sagas
import { osrmCheckingSagas } from './sagas/index';

// Actions
import * as actions from "./actions";

// Interfaces
import { IRouteCalculatorState } from "./models";

export type GoogleSearchActionType = ActionType<typeof actions>;

export const osrmSagas = function* () {
    yield all([
        osrmCheckingSagas()
    ]);
  };

/* Reducer */
const initialState: IRouteCalculatorState = {
    response: {
        code: 'NOT OK',
        waypoints: [],
        routes: []
    },
    loader: {
        isLoading: false
    }
};

export const osrmReducer = createReducer<IRouteCalculatorState, GoogleSearchActionType>(
  initialState
)
  .handleAction(actions.setLoadingStatus, (state, { payload }) => ({
    ...state,
    loader: {
        isLoading: payload.isLoading
    }
  }))
  .handleAction(
    actions.checkPointsAction.request,
    (state: IRouteCalculatorState, { payload }): IRouteCalculatorState => ({
      ...state,
      loader: {
          isLoading: true
      },
      response: {
          ...state.response
      }
    })
  )
  .handleAction(
    actions.checkPointsAction.success,
    (state: IRouteCalculatorState, { payload }): IRouteCalculatorState => ({
      ...state,
      loader: {
          isLoading: false
      },
      response: {
          ...payload
      }
    })
  );
  