import {
  HIDE_SEARCH_MARKER,
  SHOW_SEARCH_MARKER,
  MOVE_SEARCH_MARKER,
} from '../action/mapActions.js';

const initialState = {
  isMapLoading: true,
  searchMarker: {
    lat: 0,
    lng: 0,
    isVisible: false,
  },
};

export const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SEARCH_MARKER: {
      return {
        ...state,
        searchMarker: { ...state.searchMarker, isVisible: true },
      };
    }
    case HIDE_SEARCH_MARKER: {
      return {
        ...state,
        searchMarker: { ...state.searchMarker, isVisible: false },
      };
    }
    case MOVE_SEARCH_MARKER: {
      return { ...state, markers: [], searchMarker: action.payload };
    }
    default:
      return state;
  }
};
