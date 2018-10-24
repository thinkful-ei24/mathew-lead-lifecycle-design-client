import React from 'react';
import {HeaderBar} from '../components/header-bar.js';
import {shallow, mount} from 'enzyme';

describe('<HeaderBar />', () => {
  it('Should render without crashing', () => {
    const wrapper = shallow(<HeaderBar dispatch={function() {}}/>);
  });

  it('Should render header', () => {
    const wrapper = shallow(<HeaderBar dispatch={function() {}}/>);
    const header = wrapper.find('.header-bar');
    expect(header.text()).toEqual('Lead Lifecycle Designer');
  });
  
});