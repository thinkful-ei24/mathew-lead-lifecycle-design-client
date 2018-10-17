import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import {loadAuthToken} from './utils/local-storage';
import authReducer from './reducers/auth';
import protectedDataReducer from './reducers/protected-data';
import leadsReducer from './reducers/leads';
import dashboardReducer from './reducers/dashboard'
import {setAuthToken, refreshAuthToken} from './actions/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        form: formReducer,
        auth: authReducer,
        protectedData: protectedDataReducer,
        leads: leadsReducer,
        dashboard: dashboardReducer
    }),
    composeEnhancers( applyMiddleware(thunk) )
);

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;
