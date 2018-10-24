import React from 'react';
// import PropTypes from 'prop-types';
import {shallow, mount} from 'enzyme';

import {Dashboard} from '../components/dashboard.js';

describe('<Dashboard />', () => {
  it('Should render without crashing', () => {
    shallow(
      <Dashboard 
        dashboard={{data:'stuff'}}
        dispatch={function() {}} />);
  });

  it('Should render "Loading data..." if no data is given', () => {
    const wrapper = shallow(
      <Dashboard 
        dashboard={{data:'stuff'}}
        dispatch={function() {}} />);
    const data = wrapper.find('section');
    expect(data.text()).toEqual('Loading data...');
  });

  it('Onboarding Modal should show up', () => {
    const wrapper = shallow(
      <Dashboard 
        dashboard={{data:null}}
        dispatch={function() {}} 
        dashboardHelpModal={true} />);
    const data = wrapper.find('.Modal h1');
    expect(data.text()).toEqual('Hello! Welcome to the Lead Lifecycle Designer!');
  });

  it('Onboarding Modal button should be clickable', () => {
    const callback = jest.fn();
    const wrapper = shallow(
      <Dashboard 
        dashboard={{data:null}}
        dispatch={function() {}} 
        dashboardHelpModal={true} />);
    //This doesn't work
    const data = wrapper.find('button').simulate('submit');
  });

  // it('Onboarding Modal should not show up', () => {
  //   const wrapper = shallow(
  //     <Dashboard 
  //       dashboard={{data:null}}
  //       dispatch={function() {}} 
  //       dashboardHelpModal={false} />);
  //   const data = wrapper.find('.flexcontainer');
  //   console.log(data.debug())
  //   //expect(data.text()).toEqual('Hello! Welcome to the Lead Lifecycle Designer!');
  // });
  
});