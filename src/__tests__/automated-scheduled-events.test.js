import React from 'react';
import {UpcomingEventsCreator} from '../components/automated-scheduled-events.js';
import {shallow, mount} from 'enzyme';

describe('<UpcomingEventsCreator />', () => {
  it('Should render without crashing', () => {
    const wrapper = shallow(<UpcomingEventsCreator dispatch={function() {}}/>);
    // const data = wrapper.find('.flexcontainer');
    // console.log(data.debug())
  });

  //TODO Test to see if UpcomingEventsCreator renders stuff
  // it('Should render without crashing', () => {
  //   shallow(<UpcomingEventsCreator dispatch={function() {}}/>);
  // }); 
  
});