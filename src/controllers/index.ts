import { all } from "redux-saga/effects";
import { combineReducers, Reducer } from "redux";

export const rootSaga = function* () {
  yield all([
  ]);
};

export const rootReducer = (): Reducer =>
  combineReducers({
  });
