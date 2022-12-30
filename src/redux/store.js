import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { mapReducer } from './reducers/mapReducer';
import { searchReducer } from './reducers/searchReducer';

const rootReducer = combineReducers({
  map: mapReducer,
  search: searchReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
