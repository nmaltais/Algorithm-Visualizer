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

it('calls toggleOpenSidebarBtn() for #openSidebarBtn onClick', () => {
  // Setup
  const toggleSidebarMock = jest.fn();
  const wrapper = shallow(
    <Navbar visible={false} toggleSidebar={toggleSidebarMock} />,
  );
  wrapper.find('#openSidebarBtn').simulate('click');

  expect(toggleSidebarMock).toHaveBeenCalled();
});

it('calls the toggleSidebar prop for #closeSidebarBtn onClick and onKeyUp', () => {
  // Setup
  const toggleSidebarMock = jest.fn();
  const wrapper = shallow(
    <Navbar visible toggleSidebar={toggleSidebarMock} />,
  );
  wrapper.find('#closeSidebarBtn').simulate('click');
  wrapper.find('#closeSidebarBtn').simulate('keyup');

  expect(toggleSidebarMock).toHaveBeenCalledTimes(2);
});

it('toggleOpenSidebarBtn() changes the showOpenSidebarBtn state value', () => {
  const wrapper = shallow(<Navbar visible={false} toggleSidebar={jest.fn()} />);

  expect(wrapper.state('showOpenSidebarBtn')).toEqual(false);
  wrapper.instance().toggleOpenSidebarBtn();
  expect(wrapper.state('showOpenSidebarBtn')).toEqual(true);
  wrapper.instance().toggleOpenSidebarBtn();
  expect(wrapper.state('showOpenSidebarBtn')).toEqual(false);
});
