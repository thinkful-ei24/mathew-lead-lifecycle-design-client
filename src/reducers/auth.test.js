import reducer from './auth';
import {setAuthToken, 
  clearAuth,
  authRequest,
  authSuccess,
  authError,
  dashboardHelpModalOn,
  dashboardHelpModalOff,
  createLeadHelpModalOn,
  createLeadHelpModalOff} from '../actions/auth';

describe('auth reducer', () => {
  function createInitialState() {
    return {
      authToken: null, 
      currentUser: null,
      loading: false,
      error: null,
      needsDashboardHelpModal: true,
      needsCreateLeadHelpModal: true
    };
  }
  it('Should set the initial state when nothing is passed in', () => {
    const state = undefined;
    const action = {
      type: '@@@This is a Fake action @@@@@@@@'
    };
    const newState = reducer(state, action);
    expect(newState).toEqual(createInitialState());
  });

  it('Should return the current state on an unknown action', () => {
    const state = createInitialState();

    const action = {
      type: '@@@This is a Fake action @@@@@@@@'
    };

    const newState = reducer(state, action);
    expect(newState).toEqual(state);

  });

  it('Should handle the setAuthToken action', () => {
    const state = createInitialState();

    const myAuthToken = 'This Is a Fake Auth Token';
    const action = setAuthToken(myAuthToken);
    const newState = reducer(state, action);

    expect(newState).toEqual(Object.assign({}, state, {
      authToken: myAuthToken
    }))
  });  

  it('Should handle the clearAuth action', () => {
    const state = createInitialState();

    const action = clearAuth();
    const newState = reducer(state, action);
    expect(newState).toEqual(Object.assign({}, state, {
      authToken: null,
      currentUser: null
    }))
  });

  it('Should handle the authRequest action', () => {
    const state = createInitialState();
    
    const action = authRequest();
    const newState = reducer(state, action);
    expect(newState).toEqual(Object.assign({}, state, {
      loading: true,
      error: null
    }))
  });  

  it('Should handle the authSuccess action', () => {
    const state = createInitialState();

    const currentUser = {name: 'Johnny Test'};
    const action = authSuccess(currentUser);
    const newState = reducer(state, action);

    expect(newState).toEqual(Object.assign({}, state, {
      loading: false,
      currentUser
    }))
  });  

  it('Should handle the authError action', () => {
    const state = createInitialState();

    const error = {message: 'this is an error'};
    const action = authError(error);
    const newState = reducer(state, action);

    expect(newState).toEqual(Object.assign({}, state, {
      loading: false,
      error
    }))
  });  

  it('Should handle the dashboardHelpModalOn action', () => {
    const state = createInitialState();

    const action = dashboardHelpModalOn();
    const newState = reducer(state, action);

    expect(newState).toEqual(Object.assign({}, state, {
      needsDashboardHelpModal: true
    }))
  });  

  it('Should handle the dashboardHelpModalOff action', () => {
    const state = createInitialState();

    const action = dashboardHelpModalOff();
    const newState = reducer(state, action);

    expect(newState).toEqual(Object.assign({}, state, {
      needsDashboardHelpModal: false
    }))
  });  

  it('Should handle the createLeadHelpModalOn action', () => {
    const state = createInitialState();

    const action = createLeadHelpModalOn();
    const newState = reducer(state, action);

    expect(newState).toEqual(Object.assign({}, state, {
      needsCreateLeadHelpModal: true
    }))
  });  

  it('Should handle the createLeadHelpModalOff action', () => {
    const state = createInitialState();

    const action = createLeadHelpModalOff();
    const newState = reducer(state, action);

    expect(newState).toEqual(Object.assign({}, state, {
      needsCreateLeadHelpModal: false
    }))
  });  
})