import {
  ADD_SEARCH_HISTORY,
  TOGGLE_SEARCH,
  TOGGLE_ALL_SEARCHES,
  DISABLE_ALL_SEARCHES,
} from '../action/searchActions';

const initialState = {
  searchHistory: [],
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SEARCH_HISTORY: {
      return {
        ...state,
        searchHistory: [...state.searchHistory, action.payload],
      };
    }
    case TOGGLE_SEARCH: {
      console.log(action.type);
      return {
        ...state,
        searchHistory: state.searchHistory.map((search) => {
          if (
            search.name === action.payload.name &&
            search.lat === action.payload.lat &&
            search.lng === action.payload.lng
          ) {
            search.toggled = !search.toggled;
          }
          return search;
        }),
      };
    }
    case TOGGLE_ALL_SEARCHES: {
      return {
        ...state,
        searchHistory: state.searchHistory.map((search) => {
          search.toggled = true;
          return search;
        }),
      };
    }
    case DISABLE_ALL_SEARCHES: {
      return {
        ...state,
        searchHistory: state.searchHistory.map((search) => {
          search.toggled = false;
          return search;
        }),
      };
    }

    default:
      return state;
  }
};
