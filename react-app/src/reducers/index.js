import { combineReducers } from 'redux';
import docsReducer from './docsReducer';

export default combineReducers({
  records: docsReducer
})