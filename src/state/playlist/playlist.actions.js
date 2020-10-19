export const SAVE_PLAYLISTS = "SAVE_PLAYLISTS";
export const SELECT_PLAYLIST = "SELECT_PLAYLIST";
export const GET_VIDEO_REQUEST = "GET_VIDEO_REQUEST";
export const GET_VIDEO_SUCCESS = "GET_VIDEO_SUCCESS";
export const GET_VIDEO_FAIL = "GET_VIDEO_FAIL";
export const RESET_GET_VIDEO = "RESET_GET_VIDEO";

export function savePlaylists(playlists) {
  return {
    type: SAVE_PLAYLISTS,
    payload: playlists,
  };
}

export function selectPlaylist(id) {
  return {
    type: SELECT_PLAYLIST,
    payload: id,
  };
}

export function getVideoRequest(id) {
  return {
    type: GET_VIDEO_REQUEST,
    payload: id,
  };
}

export function getVideoSuccess(video) {
  return {
    type: GET_VIDEO_SUCCESS,
    payload: video,
  };
}

export function getVideoFail(error) {
  return {
    type: GET_VIDEO_FAIL,
    payload: error,
  };
}

export function resetGetVideo() {
  return {
    type: RESET_GET_VIDEO,
  };
}
