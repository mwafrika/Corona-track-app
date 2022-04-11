/* eslint-disable no-underscore-dangle */
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import covidReducer from './reducers';

const intialState = {};

const rootReducer = combineReducers({
  dragons: covidReducer,
});

const store = createStore(
  rootReducer,
  intialState,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
