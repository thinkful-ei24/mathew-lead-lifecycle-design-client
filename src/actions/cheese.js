//TODO: REMOVE THIS
import {API_BASE_URL} from '../config';

export const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST';
export const fetchCheesesRequest = authToken => ({
    type: FETCH_CHEESES_REQUEST,
});

export const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS';
export const fetchCheesesSuccess = authToken => ({
    type: FETCH_CHEESES_SUCCESS,
});

export const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR';
export const fetchCheesesError = authToken => ({
    type: FETCH_CHEESES_ERROR,
});

export const fetchCheeses = () => dispatch => {
  dispatch(fetchCheesesRequest());
  return (
      fetch(`${API_BASE_URL}/api/cheeses`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          }
        }
      )
          // Reject any requests which don't return a 200 status, creating
          // errors which follow a consistent format
          //.then(res => normalizeResponseErrors(res))
          .then(res => res.json())
          .then(({data}) => dispatch(fetchCheesesSuccess(data)))
          .catch(err => {
            dispatch(fetchCheesesError(err));
        })
  )
};
