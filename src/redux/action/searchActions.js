export const ADD_SEARCH_HISTORY = 'ADD_SEARCH_HISTORY';
export const TOGGLE_SEARCH = 'TOGGLE_SEARCH';
export const TOGGLE_ALL_SEARCHES = 'TOGGLE_ALL_SEARCHES';
export const DISABLE_ALL_SEARCHES = 'DISABLE_ALL_SEARCHES';

export const addSearchHistory = (searchResult) => {
  return {
    type: ADD_SEARCH_HISTORY,
    payload: searchResult,
  };
};

export const toggleHistorySearch = (search) => {
  return {
    type: TOGGLE_SEARCH,
    payload: search,
  };
};

export const toggleAllSearches = () => {
  return {
    type: TOGGLE_ALL_SEARCHES,
  };
};

export const disableAllSearches = () => {
  return {
    type: DISABLE_ALL_SEARCHES,
  };
};
