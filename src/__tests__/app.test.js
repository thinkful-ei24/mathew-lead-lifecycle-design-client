import React from 'react';
import {App} from '../components/app.js';
import {shallow, mount} from 'enzyme';

describe('<App />', () => {
  it('Should render without crashing', () => {
      shallow(<App />);
  });

  
});