import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

it('renders correctly when open', () => {
  const wrapper = shallow(<Navbar visible toggleSidebar={jest.fn()} />);
  expect(wrapper).toMatchSnapshot();
});
it('renders correctly when closed', () => {
  const wrapper = shallow(<Navbar visible={false} toggleSidebar={jest.fn()} />);
  expect(wrapper).toMatchSnapshot();
});
