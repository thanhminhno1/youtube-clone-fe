import { combineReducers } from 'redux';

const createReducer = injectedReducers =>
  combineReducers({
    ...injectedReducers,
  });

export default createReducer;
