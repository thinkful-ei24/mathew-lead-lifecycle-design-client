import {
  SET_AUTH_TOKEN,
  CLEAR_AUTH,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_ERROR,
  NEEDS_DASHBOARD_HELP_ON,
  NEEDS_DASHBOARD_HELP_OFF,
  NEEDS_CREATE_LEAD_HELP_ON,
  NEEDS_CREATE_LEAD_HELP_OFF
} from '../actions/auth';

const initialState = {
  authToken: null, // authToken !== null does not mean it has been validated
  currentUser: null,
  loading: false,
  error: null,
  needsDashboardHelpModal: true,
  needsCreateLeadHelpModal: true
};

export default function reducer(state = initialState, action) {
  if (action.type === SET_AUTH_TOKEN) {
    return Object.assign({}, state, {
      authToken: action.authToken
    });
  } else if (action.type === CLEAR_AUTH) {
    return Object.assign({}, state, {
      authToken: null,
      currentUser: null
    });
  } else if (action.type === AUTH_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  } else if (action.type === AUTH_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      currentUser: action.currentUser
    });
  } else if (action.type === AUTH_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  } else if (action.type === NEEDS_DASHBOARD_HELP_ON) {
    return Object.assign({}, state, {
      needsDashboardHelpModal: true
    });
  } else if (action.type === NEEDS_DASHBOARD_HELP_OFF) {
    return Object.assign({}, state, {
      needsDashboardHelpModal: false
    });
  } else if (action.type === NEEDS_CREATE_LEAD_HELP_ON) {
    return Object.assign({}, state, {
      needsCreateLeadHelpModal: true
    });
  } else if (action.type === NEEDS_CREATE_LEAD_HELP_OFF) {
    return Object.assign({}, state, {
      needsCreateLeadHelpModal: false
    });
  }
  return state;
}
