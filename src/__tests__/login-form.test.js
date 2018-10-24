import React from 'react';
import {LoginForm} from '../components/login-form.js';
import {shallow, mount} from 'enzyme';

describe('<LoginForm />', () => {
  it('Should render without crashing', () => {
      shallow(<LoginForm handleSubmit = {() => {}}/>);
  });

});