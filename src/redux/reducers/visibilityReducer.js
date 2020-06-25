import { SET_VISIBILITY } from "../actions/visibilityActions";

const initialState = 'complete';

function visibilityReducer(state = initialState, action) {
  if (action.type === SET_VISIBILITY) {
    return action.status;
  }
  return state;
}

export default visibilityReducer;