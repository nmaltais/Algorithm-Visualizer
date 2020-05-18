import React from 'react';
import { shallow } from 'enzyme';
import Pathfinding from './Pathfinding';

it('renders correctly', () => {
  const wrapper = shallow(<Pathfinding />);
  const text = <p>Pathfinding Page</p>;
  expect(wrapper.contains(text)).toEqual(true);
});
