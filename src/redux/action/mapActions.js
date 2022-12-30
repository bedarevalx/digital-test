export const SHOW_ALL_MARKERS = 'SHOW_ALL_MARKERS';
export const ADD_MARKER = 'ADD_MARKER';
export const HIDE_SEARCH_MARKER = 'HIDE_SEARCH_MARKER';
export const SHOW_SEARCH_MARKER = 'SHOW_SEARCH_MARKER';
export const MOVE_SEARCH_MARKER = 'MOVE_SEARCH_MARKER';
export const REMOVE_MARKER = 'REMOVE_MARKER';

export const moveMarker = (lat, lng) => {
  const marker = {
    isVisible: true,
    lat: lat,
    lng: lng,
  };
  return {
    type: MOVE_SEARCH_MARKER,
    payload: marker,
  };
};

export const showSearchMarker = (marker) => {
  return {
    type: SHOW_SEARCH_MARKER,
    payload: [marker],
  };
};

export const hideSearchMarker = () => {
  return {
    type: HIDE_SEARCH_MARKER,
  };
};
