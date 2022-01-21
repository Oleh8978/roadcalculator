import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import { rootReducer, rootSaga } from "./controllers";

const sagaMiddleware = createSagaMiddleware();
let middleWares = applyMiddleware(sagaMiddleware);

if (process.env.NODE_ENV === "development") {
  middleWares = composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  );
}

const store = createStore(rootReducer(), middleWares);
sagaMiddleware.run(rootSaga);


export default store;