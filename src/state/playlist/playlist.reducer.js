import {
  SAVE_PLAYLISTS,
  SELECT_PLAYLIST,
  GET_VIDEO_SUCCESS,
  GET_VIDEO_FAIL,
  RESET_GET_VIDEO,
} from "./playlist.actions";

const initialState = {
  playlists: [],
  selectedPlaylist: null,
  currentVideo: null,
  currentVideoError: null,
};

export function playlistReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_PLAYLISTS:
      return {
        ...state,
        playlists: action.payload,
      };
    case SELECT_PLAYLIST:
      const selectedPlaylist = state.playlists.find(
        (playlist) => playlist.id === action.payload
      );
      return {
        ...state,
        selectedPlaylist,
      };
    case GET_VIDEO_SUCCESS: {
      return {
        ...state,
        currentVideo: action.payload,
      };
    }
    case GET_VIDEO_FAIL: {
      return {
        ...state,
        currentVideoError: action.payload,
      };
    }
    case RESET_GET_VIDEO: {
      return {
        ...state,
        currentVideo: initialState.currentVideo,
        currentVideoError: initialState.currentVideoError,
      };
    }
    default:
      return state;
  }
}
