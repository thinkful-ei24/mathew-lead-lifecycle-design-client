import {
  FETCH_LEADS_SUCCESS,
  FETCH_LEADS_ERROR,
  LEAD_SELECTED,
  TOGGLE_EDITING
} from '../actions/dashboard';

const initialState = {
  data: [],
  error: null,
  leadSelected: null,
  editing: false
};

//refactor this so that it's not just protected-data
export default function reducer(state = initialState, action) {
  if (action.type === FETCH_LEADS_SUCCESS) {
      return Object.assign({}, state, {
          data: [...action.data],
          loading: false,
          error: null,
      });
  } else if (action.type === FETCH_LEADS_ERROR) {
      return Object.assign({}, state, {
          error: action.error,
          loading: false,
      });
  } else if (action.type === LEAD_SELECTED) {
    return Object.assign( {}, state, {
      leadSelected: action.leadSelected
    })
  } else if (action.type === TOGGLE_EDITING) {
    return Object.assign({}, state, {
      editing: !state.editing
    });
  }
  return state;
}
