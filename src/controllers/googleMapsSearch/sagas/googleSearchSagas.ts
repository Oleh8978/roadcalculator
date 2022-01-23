import { all, put, takeEvery } from "redux-saga/effects";

//APIs
import { GoogleSearchAPI } from "../transport/googleMaps.api";

// actions 
import { searchRequestAction, searchRequestByCoordinatesAction } from '../actions';
import * as addressFieldActions from '../../addressField/actions';
import { setZoomCenterAction } from "../../zoomCenter/actions";
import * as coordinatesActions from '../../coordinates/actions';
// errors handlers 
import * as errorHandlers from '../../errorHandler/action';

import  { IGoogleApiSearchResponse } from '../models';

export function*  googleSearchSaga({
        payload,
}: ReturnType<typeof searchRequestAction.request>) {

  try {
    const res: IGoogleApiSearchResponse = yield (GoogleSearchAPI.getListOfGeoObjectsByApi(payload));
    
    if (res.status === 'OK') {
        yield put(searchRequestAction.success(res))
    } else {
      yield put(searchRequestAction.failure(res));
    }
  } catch (error) {
    yield put(errorHandlers.setNewError({
      type: 'google search error',
      msg: String(error),
      id: Math.random(),
    }))
    yield put(searchRequestAction.failure({results: [], status: 'NOT OK'}));
  }
}

export function*  googleSearchSagaByCoordinates({
  payload,
}: ReturnType<typeof searchRequestByCoordinatesAction.request>) {

try {
  const res: IGoogleApiSearchResponse = yield (GoogleSearchAPI.getListOfGeoObjectsByApiLngLat(payload.coords));

      if (res.status === 'OK') {

        if (payload.type === 'Origin location (point) ') {

            if (res.results)  {
              yield put(addressFieldActions.setAddressOriginAction((res.results[0].formatted_address)));
              yield put(coordinatesActions.setOriginAction(res.results[0]));
              yield put(setZoomCenterAction({center: res.results[0].geometry.location, zoom: 15 }))
            }
          

        } else {

          if (res.results) {
            yield put(addressFieldActions.setAddressDestinationAction((res.results[0].formatted_address)))
            yield put(coordinatesActions.setDestination(res.results[0]))
            yield put(setZoomCenterAction({center: res.results[0].geometry.location, zoom: 15 }))
          }

        }

      } else {
        yield put(searchRequestByCoordinatesAction.failure(res));
      }

    } catch (error) {
      yield put(errorHandlers.setNewError({
        type: 'google search error',
        msg: String(error),
        id: Math.random(),
      }))
    yield put(searchRequestByCoordinatesAction.failure({results: [], status: 'NOT OK'}));

  }

}


export function* googleSearchSagas() {
  yield all([
    takeEvery(searchRequestAction.request, googleSearchSaga),
    takeEvery(searchRequestByCoordinatesAction.request, googleSearchSagaByCoordinates)
  ]);
}
