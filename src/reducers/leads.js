import {
  CREATE_LEAD_REQUEST,
  CREATE_LEAD_SUCCESS,
  CREATE_LEAD_ERROR,
  RESET_LEADS_STATE
} from '../actions/leads';

const initialState = {
  createLead: false,
  leadBeingViewed: null,
  loading: false,
  error: null,
  currentLead: null
};

export default function reducer(state = initialState, action) {
  
  if (action.type === CREATE_LEAD_REQUEST) {
      return Object.assign({}, state, {
          loading: true,
          error: null
      });
  } else if (action.type === CREATE_LEAD_SUCCESS) {
      return Object.assign({}, state, {
          loading: false,
          createLead: true,
          leadBeingViewed: null
      });
  } else if (action.type === CREATE_LEAD_ERROR) {
      return Object.assign({}, state, {
          loading: false,
          error: action.error
      });
  } else if (action.type === RESET_LEADS_STATE) {
    return Object.assign({}, state, {
      createLead: false,
      leadBeingViewed: null,
      loading: false,
      error: null,
      currentLead: null

  });
  }
  return state;
}
