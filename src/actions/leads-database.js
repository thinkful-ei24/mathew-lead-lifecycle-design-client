import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_LEADS_LIST_REQUEST = 'FETCH_LEADS_LIST_REQUEST';
export const fetchLeadsListRequest = data => ({
    type: FETCH_LEADS_LIST_REQUEST,
});

export const FETCH_LEADS_LIST_SUCCESS = 'FETCH_LEADS_LIST_SUCCESS';
export const fetchLeadsListSuccess = data => ({
    type: FETCH_LEADS_LIST_SUCCESS,
    data
});

export const FETCH_LEADS_LIST_ERROR = 'FETCH_LEADS_LIST_ERROR';
export const fetchLeadsListError = error => ({
    type: FETCH_LEADS_LIST_ERROR,
    error
});

export const fetchLeadsList = () => (dispatch, getState) => {
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
        .then(({data}) => dispatch(fetchLeadsListSuccess(data)))
        .catch(err => {
            dispatch(fetchLeadsListError(err));
        });
};
