import { all, put, takeEvery } from "redux-saga/effects";

//APIs
import { OSRMApi } from "../transport/osrm.api";

// actions 
import * as actions from '../actions';
// errors handlers 
import * as errorHandlers from '../../errorHandler/action';

import  { IosrmResponse } from '../models';

export function*  osrmCheckPointsSagas({
        payload,
}: ReturnType<typeof actions.checkPointsAction.request>) {

  try {
    yield put(actions.setLoadingStatus({isLoading: true}))
    const res: IosrmResponse = yield (OSRMApi.getDistanceByPints(payload));
    
    if (res.code === 'Ok') {
        yield put(actions.checkPointsAction.success({...res}))
        yield put(actions.setLoadingStatus({isLoading: false}))
    } else {
      yield put(actions.checkPointsAction.failure(res));
      yield put(actions.setLoadingStatus({isLoading: false}))
    }
  } catch (error) {
    yield put(actions.setLoadingStatus({isLoading: false}))
    yield put(errorHandlers.setNewError({
      id: Math.random(),
      type: 'Calculating error',
      msg: String(error)
    }))
    yield put(actions.checkPointsAction
        .failure({
            code: 'NOT OK',
            waypoints: [],
            routes: []
            })
        );
  }
}



export function* osrmCheckingSagas() {
  yield all([
    takeEvery(actions.checkPointsAction.request, osrmCheckPointsSagas),
  ]);
}
