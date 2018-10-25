import {RESET_LEADS_STATE, resetLeadsState, 
  STATE_UPDATE_UPCOMING_EVENTS, stateUpdateUpcomingEvents,
  CREATE_LEAD_REQUEST, createLeadRequest,
  CREATE_LEAD_SUCCESS, createLeadSuccess,
  CREATE_LEAD_ERROR, createLeadError } from './leads';

describe('Reset Leads State', () => {
  it('Should return the action', () => {
    const action = resetLeadsState();
    expect(action).toEqual({
      type: RESET_LEADS_STATE
    })
  });
})

describe('State Update Upcoming Events', () => {
  it('Should return the action', () => {
    const upcomingEvents = ['test'];
    const action = stateUpdateUpcomingEvents( upcomingEvents );
    expect(action).toEqual({
      type: STATE_UPDATE_UPCOMING_EVENTS,
      upcomingEvents: upcomingEvents
    })
  });
})

describe('Create Lead Request', () => {
  it('Should return the action', () => {
    const action = createLeadRequest(  );
    expect(action).toEqual({
      type: CREATE_LEAD_REQUEST
    })
  });
})

describe('Create Lead Success', () => {
  it('Should return the action', () => {
    const currentLead = {name: 'Jonny Test'};
    const action = createLeadSuccess( currentLead );
    expect(action).toEqual({
      type: CREATE_LEAD_SUCCESS,
      currentLead: currentLead
    })
  });
})

describe('Create Lead Error', () => {
  it('Should return the action', () => {
    const error = 'This is a test error';
    const action = createLeadError( error );
    expect(action).toEqual({
      type: CREATE_LEAD_ERROR,
      error
    })
  });
})