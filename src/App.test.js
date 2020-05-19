import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders correctly', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});

it('toggleSidebar toggles sidebar visibility in App state', () => {
  // Setup
  const wrapper = shallow(<App />);

  expect(wrapper.state('visible')).toEqual(true);
  wrapper.instance().toggleSidebar('push');
  expect(wrapper.state('visible')).toEqual(false);
  wrapper.instance().toggleSidebar('push');
  expect(wrapper.state('visible')).toEqual(true);
});
