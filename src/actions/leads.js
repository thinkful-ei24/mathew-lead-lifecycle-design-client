import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const CREATE_LEAD_REQUEST = 'CREATE_LEAD_REQUEST';
export const createLeadRequest = () => ({
    type: CREATE_LEAD_REQUEST
});

export const CREATE_LEAD_SUCCESS = 'CREATE_LEAD_SUCCESS';
export const createLeadSuccess = currentLead => ({
    type: CREATE_LEAD_SUCCESS,
    currentLead
});

export const CREATE_LEAD_ERROR = 'CREATE_LEAD_ERROR';
export const createLeadError = error => ({
    type: CREATE_LEAD_ERROR,
    error
});

export const RESET_LEADS_STATE = 'RESET_LEADS_STATE';
export const resetLeadsState = () => ({
  type: RESET_LEADS_STATE
});

export const STATE_UPDATE_UPCOMING_EVENTS = 'STATE_UPDATE_UPCOMING_EVENTS';
export const stateUpdateUpcomingEvents = upcomingEvents => ({
  type: STATE_UPDATE_UPCOMING_EVENTS,
  upcomingEvents
})

export const createLead = lead => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(createLeadRequest());
  console.log(lead)
  
    return fetch(`${API_BASE_URL}/api/leads/`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify(lead)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({data}) => {
          dispatch(createLeadSuccess(data))
        })
        .catch(err => {
          console.log(err)
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        _error: 'this is an error',
                        [location]: message
                    })
                );
            } else {
              return Promise.reject(
                new SubmissionError({
                    _error: message
                })
            );
            }
        });
};
