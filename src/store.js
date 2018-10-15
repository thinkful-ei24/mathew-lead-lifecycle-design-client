import {createStore, applyMiddleware, combineReducers} from 'redux';
//import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import cheese from './reducers/cheese';

const store = createStore(
    combineReducers({
        cheese: cheese,
    }),
    applyMiddleware(thunk)
);

// Hydrate the authToken from localStorage if it exist
// const authToken = loadAuthToken();
// if (authToken) {
//     const token = authToken;
//     store.dispatch(setAuthToken(token));
//     store.dispatch(refreshAuthToken());
// }

export default store;
