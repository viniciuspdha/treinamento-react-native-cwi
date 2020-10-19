import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { playlistReducer } from "./playlist/playlist.reducer";
import Reactotron from "../../ReactotronConfig";
import reactotronSaga from "reactotron-redux-saga";
import rootSaga from "./app.saga";

const sagaMonitor = reactotronSaga.sagaMonitor;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const middlewares = applyMiddleware(sagaMiddleware);

const reducer = combineReducers({
  playlistReducer,
});

export const store = createStore(
  reducer,
  compose(middlewares, Reactotron.createEnhancer())
);

sagaMiddleware.run(rootSaga);
