import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_LEADS_SUCCESS = 'FETCH_LEADS_SUCCESS';
export const fetchLeadsSuccess = data => ({
    type: FETCH_LEADS_SUCCESS,
    data
});

export const FETCH_LEADS_ERROR = 'FETCH_LEADS_ERROR';
export const fetchLeadsError = error => ({
    type: FETCH_LEADS_ERROR,
    error
});

export const LEAD_SELECTED = 'LEAD_SELECTED';
export const leadSelected = function(leadId) {
  return {
    type: LEAD_SELECTED,
    personSelected: leadId
  }
}

export const TOGGLE_EDITING = 'TOGGLE_EDITING';
export const toggleEditing = function() {
  return {
    type: TOGGLE_EDITING
  }
}

export const fetchAllLeads = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/api/leads`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((results) => {
          dispatch(fetchLeadsSuccess(results))
        })
        .catch(err => {
            dispatch(fetchLeadsError(err));
        });
};
