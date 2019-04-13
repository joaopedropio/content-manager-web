import { combineReducers } from 'redux';
import pathReducer from './pathReducer';

const Reducers = combineReducers({
  path: pathReducer,
});

export default Reducers;