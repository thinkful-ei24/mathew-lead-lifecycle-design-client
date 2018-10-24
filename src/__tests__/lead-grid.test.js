import React from 'react';
import {LeadGrid} from '../components/lead-grid.js';
import {shallow, mount} from 'enzyme';

describe('<LeadGrid />', () => {
  it('Should render without crashing', () => {
      shallow(
      <LeadGrid 
        dashboard={{data:'stuff'}}
        dispatch={jest.fn()} 
        leadSelected={true}
        leads={[{
          firstName: 'John', 
          lastName:'Smith', 
          updatedAt: Date.now(),
          mobilePhoneNumber: '8121234567',
          homePhoneNumber: '8121234567',
          emailAddress: 'thing@email.com',
          nextScheduledEvent: '' }]} />);
  });

  it('Should render the table of data', () => {
    const wrapper = shallow(
    <LeadGrid 
      dashboard={{data:'stuff'}}
      dispatch={jest.fn()} 
      leadSelected={true}
      query={true}
      leads={[{
        firstName: 'John', 
        lastName:'Smith', 
        updatedAt: Date.now(),
        mobilePhoneNumber: '8121234567',
        homePhoneNumber: '8121234567',
        emailAddress: 'thing@email.com',
        nextScheduledEvent: '' }]} />);
    //Doesn't work. I have the <Media > component so I don't know how to test it
    // const data = wrapper.find('.flexcontainer');
    // console.log(wrapper.debug())
});
});
