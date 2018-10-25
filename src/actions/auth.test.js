import {SET_AUTH_TOKEN, setAuthToken, 
  CLEAR_AUTH, clearAuth,
  AUTH_REQUEST, authRequest,
  AUTH_SUCCESS, authSuccess,
  AUTH_ERROR, authError,
  NEEDS_DASHBOARD_HELP_ON, dashboardHelpModalOn,
  NEEDS_DASHBOARD_HELP_OFF, dashboardHelpModalOff,
  NEEDS_CREATE_LEAD_HELP_ON, createLeadHelpModalOn,
  NEEDS_CREATE_LEAD_HELP_OFF, createLeadHelpModalOff} from './auth';

describe('Set Auth Token', () => {
  it('Should return the action', () => {
    const authToken = 'ajfjadfkhkhfha';
    const action = setAuthToken(authToken);
    expect(action).toEqual({
      type: SET_AUTH_TOKEN,
      authToken
    })
  });
})

describe('Clear Auth Token', () => {
  it('Should return the action', () => {
    const action = clearAuth(  );
    expect(action).toEqual({
      type: CLEAR_AUTH
    })
  });
})

describe('Auth Request', () => {
  it('Should return the action', () => {
    const action = authRequest(  );
    expect(action).toEqual({
      type: AUTH_REQUEST
    })
  });
})

describe('Auth Success', () => {
  it('Should return the action', () => {
    const currentUser = {name: 'Jonny Test'};
    const action = authSuccess( currentUser );
    expect(action).toEqual({
      type: AUTH_SUCCESS,
      currentUser
    })
  });
})

describe('Auth Error', () => {
  it('Should return the action', () => {
    const error = 'This is a test error';
    const action = authError( error );
    expect(action).toEqual({
      type: AUTH_ERROR,
      error
    })
  });
})

describe('Needs Dashboard Help On', () => {
  it('Should return the action', () => {
    const action = dashboardHelpModalOn(  );
    expect(action).toEqual({
      type: NEEDS_DASHBOARD_HELP_ON
    })
  });
})

describe('Needs Dashboard Help Off', () => {
  it('Should return the action', () => {
    const action = dashboardHelpModalOff(  );
    expect(action).toEqual({
      type: NEEDS_DASHBOARD_HELP_OFF
    })
  });
})

describe('Needs Create Lead Help On', () => {
  it('Should return the action', () => {
    const action = createLeadHelpModalOn(  );
    expect(action).toEqual({
      type: NEEDS_CREATE_LEAD_HELP_ON
    })
  });
})

describe('Needs Dashboard Help Off', () => {
  it('Should return the action', () => {
    const action = createLeadHelpModalOff(  );
    expect(action).toEqual({
      type: NEEDS_CREATE_LEAD_HELP_OFF
    })
  });
})