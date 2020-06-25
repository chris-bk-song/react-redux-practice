import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import visibilityReducer from './visibilityReducer';

const rootReducer = combineReducers({
  todoState: todoReducer,
  visibility: visibilityReducer
});

export default rootReducer;