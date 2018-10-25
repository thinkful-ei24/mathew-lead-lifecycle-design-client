import React from 'react';
import {LandingPage} from '../components/landing-page.js';
import {shallow, mount} from 'enzyme';

describe('<LandingPage />', () => {
  it('Should render without crashing', () => {
      shallow(<LandingPage />);
  });

});