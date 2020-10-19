import { all, call, put, takeLatest } from "redux-saga/effects";
import * as VideoService from "../../services/videos/videos.service";
import {
  getVideoFail,
  getVideoSuccess,
  GET_VIDEO_REQUEST,
} from "./playlist.actions";

function* getVideoAsync(action) {
  try {
    const response = yield call(VideoService.fetchVideoById, action.payload);
    yield put(getVideoSuccess(response));
  } catch (error) {
    yield put(getVideoFail(error));
  }
}

export default function* playlistSaga() {
  yield all([yield takeLatest(GET_VIDEO_REQUEST, getVideoAsync)]);
}
