import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import covidReducer from './reducers';

const intialState = {};

const rootReducer = combineReducers({
  cases: covidReducer,
});

const store = createStore(
  rootReducer,
  intialState,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
