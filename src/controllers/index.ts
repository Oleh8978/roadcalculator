import { all } from "redux-saga/effects";
import { combineReducers, Reducer } from "redux";

import { gSearchReducer, gSearchSaga } from './googleMapsSearch/index';
import { setFeeReducer } from './feeReducer';
import { coordinatesReducer } from './coordinates';
import { sharedCoordinatesReducer } from "./sharedLngLat";
import { setAddressReducer } from './addressField';
import { setZoomCenter } from './zoomCenter';
import { setLoaderReducer } from './listLoader';
import { setTypingReducer } from './typingReducer';
import { osrmReducer, osrmSagas } from "./distanceCalculator";
import { setDropDownReducer } from './dropdownReducer';
import { setErrorsReducer } from  './errorHandler';

// interfaces 
import { IStore } from "./storeModel";

export const rootSaga = function* () {
  yield all([
    gSearchSaga(),
    osrmSagas()
  ]);
};

export const rootReducer = (): Reducer =>
  combineReducers<IStore>({
    googleSelectSearch: gSearchReducer,
    feeReducer: setFeeReducer,
    coordinates: coordinatesReducer,
    sharedCoordinates: sharedCoordinatesReducer,
    addressReducer: setAddressReducer,
    setZoomCenter: setZoomCenter,
    smallLoader: setLoaderReducer,
    typingTimeOut: setTypingReducer,
    distance: osrmReducer,
    dropdown: setDropDownReducer,
    errors: setErrorsReducer,
  });
