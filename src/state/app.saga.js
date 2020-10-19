import { all, fork } from "redux-saga/effects";

import playlistSaga from "./playlist/playlist.saga";

export default function* rootSaga() {
  yield all([fork(playlistSaga)]);
}
