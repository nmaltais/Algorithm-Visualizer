import React from 'react';
import { shallow } from 'enzyme';
import Sorting from './Sorting';

it('renders correctly', () => {
  const wrapper = shallow(<Sorting />);
  const text = <p>Sorting Page</p>;
  expect(wrapper.contains(text)).toEqual(true);
});
