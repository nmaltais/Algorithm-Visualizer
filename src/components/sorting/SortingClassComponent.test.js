import React from 'react';
import { shallow, mount } from 'enzyme';
import SortingClassComponent from './SortingClassComponent';
import * as Animation from './Animation';


afterEach(() => {
  jest.clearAllMocks();
});

describe('SortingClassComponent', () => {
  it('renders bubble-sort correctly', () => {
    const wrapper = shallow(<SortingClassComponent.WrappedComponent match={{ params: { alg: 'bubble-sort' } }} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('switches from play to pause and vice-versa', () => {
    const wrapper = shallow(<SortingClassComponent.WrappedComponent match={{ params: { alg: 'bubble-sort' } }} />);
    wrapper.find('#playBtn').simulate('click');
    expect(wrapper.find('#pauseBtn').exists()).toBeTruthy();
    expect(!wrapper.find('#playBtn').exists()).toBeTruthy();
    wrapper.find('#pauseBtn').simulate('click');
    expect(wrapper.find('#playBtn').exists()).toBeTruthy();
    expect(!wrapper.find('#pauseBtn').exists()).toBeTruthy();
  });

  it('Displays play btn after hitting reset', () => {
    const wrapper = shallow(<SortingClassComponent.WrappedComponent match={{ params: { alg: 'bubble-sort' } }} />);
    wrapper.find('#playBtn').simulate('click');
    wrapper.find('#resetBtn').simulate('click');
    expect(wrapper.find('#playBtn').exists()).toBeTruthy();
    expect(!wrapper.find('#pauseBtn').exists()).toBeTruthy();
  });

  it('playBtn click calls playAnimation', () => {
    const mockPlayAnimation = jest.spyOn(Animation, 'playAnimation');
    const wrapper = shallow(<SortingClassComponent.WrappedComponent match={{ params: { alg: 'bubble-sort' } }} />);
    wrapper.find('#playBtn').simulate('click');
    expect(mockPlayAnimation).toHaveBeenCalled();
    wrapper.find('#resetBtn').simulate('click');
  });
  it('pauseBtn click calls pauseAnimation', () => {
    const mockPauseAnimation = jest.spyOn(Animation, 'pauseAnimation');
    const wrapper = shallow(<SortingClassComponent.WrappedComponent match={{ params: { alg: 'bubble-sort' } }} />);
    wrapper.find('#playBtn').simulate('click'); // To make pauseBtn appear
    wrapper.find('#pauseBtn').simulate('click');
    expect(mockPauseAnimation).toHaveBeenCalled();
  });
  it('resetBtn click calls resetAnimation', () => {
    const mockResetAnimation = jest.spyOn(Animation, 'resetAnimation');
    const wrapper = shallow(<SortingClassComponent.WrappedComponent match={{ params: { alg: 'bubble-sort' } }} />);
    wrapper.find('#resetBtn').simulate('click');
    expect(mockResetAnimation).toHaveBeenCalled();
  });
  it('animationSpeed slider change calls changeSpeed', () => {
    const wrapper = shallow(<SortingClassComponent.WrappedComponent match={{ params: { alg: 'bubble-sort' } }} />);
    const mockChangeSpeed = jest.spyOn(wrapper.instance(), 'changeSpeed');
    wrapper.instance().forceUpdate();
    wrapper.find('#speedSlider').simulate('change', { target: { value: 100 } });
    expect(mockChangeSpeed).toHaveBeenCalled();
  });
  it('animationSpeed slider changes the state correctly', () => {
    const wrapper = shallow(<SortingClassComponent.WrappedComponent match={{ params: { alg: 'bubble-sort' } }} />);
    expect(wrapper.instance().state.speedPercentage).toEqual(80);
    expect(wrapper.instance().speedPercentageRef.current).toEqual(80);
    wrapper.find('#speedSlider').simulate('change', { target: { value: 20 } });
    expect(wrapper.instance().state.speedPercentage).toEqual(20);
    expect(wrapper.instance().speedPercentageRef.current).toEqual(20);
    wrapper.find('#speedSlider').simulate('change', { target: { value: 100 } });
    expect(wrapper.instance().state.speedPercentage).toEqual(100);
    expect(wrapper.instance().speedPercentageRef.current).toEqual(100);
  });
  it('animation btns trigger correct state changes', () => {
    const wrapper = shallow(<SortingClassComponent.WrappedComponent match={{ params: { alg: 'bubble-sort' } }} />);
    expect(wrapper.instance().state.animationState).toEqual('init');
    wrapper.find('#playBtn').simulate('click');
    expect(wrapper.instance().state.animationState).toEqual('playing');
    wrapper.find('#pauseBtn').simulate('click');
    expect(wrapper.instance().state.animationState).toEqual('paused');
    wrapper.find('#playBtn').simulate('click');
    expect(wrapper.instance().state.animationState).toEqual('playing');
    wrapper.find('#resetBtn').simulate('click');
    expect(wrapper.instance().state.animationState).toEqual('init');
  });
  it('Changing url params resets the animation', () => {
    const wrapper = shallow(<SortingClassComponent.WrappedComponent match={{ params: { alg: 'bubble-sort' } }} />);
    expect(wrapper.instance().state.animationState).toEqual('init');
    wrapper.find('#playBtn').simulate('click');
    expect(wrapper.instance().state.animationState).toEqual('playing');
    wrapper.setProps({ match: { params: { alg: 'insertion-sort' } } });
    const mockResetAnimation = jest.spyOn(Animation, 'resetAnimation');
    expect(mockResetAnimation).toHaveBeenCalled();
    expect(wrapper.instance().state.animationState).toEqual('init');
  });
});

describe('Animation', () => {
  it('Updates step count as animation plays', async () => {
    const mockPlayAnimation = jest.spyOn(Animation, 'playAnimation');
    const mockRequestAnimationFrame = jest.spyOn(global, 'requestAnimationFrame');
    const wrapper = mount(<SortingClassComponent.WrappedComponent match={{ params: { alg: 'bubble-sort' } }} />);

    expect(wrapper.instance().currentStep.current).toEqual(0);
    wrapper.find('#playBtn').first().simulate('click');
    expect(mockRequestAnimationFrame).toHaveBeenCalledWith(expect.any(Function));

    // Let the animation play for 5 steps and make sure 5 frames have been requested.
    await new Promise((r) => setTimeout(r, (-20.19 * wrapper.instance().speedPercentageRef.current + 2000) * 5));
    expect(mockPlayAnimation).toHaveBeenCalledTimes(1);
    expect(mockRequestAnimationFrame).toHaveBeenCalledTimes(5);
    expect(wrapper.instance().currentStep.current).toEqual(5);

    // Hack: Stop animation so it doesn't conflict with next test
    wrapper.find('#resetBtn').first().simulate('click');
  });

  it('Resets the bars', async () => {
    const mockRequestAnimationFrame = jest.spyOn(global, 'requestAnimationFrame');
    const wrapper = mount(<SortingClassComponent.WrappedComponent match={{ params: { alg: 'insertion-sort' } }} />);

    // Let the animation play for 5 steps.
    wrapper.find('#playBtn').last().simulate('click');
    await new Promise((r) => setTimeout(r, (-20.19 * wrapper.instance().speedPercentageRef.current + 2000) * 5));
    expect(mockRequestAnimationFrame).toHaveBeenCalledTimes(5);
    expect(wrapper.instance().currentStep.current).toEqual(5);

    // Press reset button and make sure the bars are reset.
    wrapper.find('#resetBtn').first().simulate('click');
    wrapper.instance().state.list.forEach((num, i) => {
      expect(wrapper.instance().barRefs.current[i].current.style.backgroundColor).toEqual('rgb(139, 212, 214)');
      expect(wrapper.instance().barRefs.current[i].current.style.height).toEqual(`${num}vh`);
      expect(wrapper.instance().barRefs.current[i].current.style.borderTop).toEqual('0px');
    });

    // Hack: Stop animation so it doesn't conflict with next test
    wrapper.find('#resetBtn').first().simulate('click');
  });

  it('Pauses the animation', async () => {
    jest.clearAllMocks();
    const mockRequestAnimationFrame = jest.spyOn(global, 'requestAnimationFrame');
    const wrapper = mount(<SortingClassComponent.WrappedComponent match={{ params: { alg: 'bubble-sort' } }} />);

    // Let the animation play for 5 steps
    wrapper.find('#playBtn').first().simulate('click');
    await new Promise((r) => setTimeout(r, (-20.19 * wrapper.instance().speedPercentageRef.current + 2000) * 5));
    expect(mockRequestAnimationFrame).toHaveBeenCalledTimes(5);
    expect(wrapper.instance().currentStep.current).toEqual(5);

    // Pause the animation, wait and make sure no more frames having been requested.
    wrapper.find('#pauseBtn').first().simulate('click');
    await new Promise((r) => setTimeout(r, (-20.19 * wrapper.instance().speedPercentageRef.current + 2000) * 5));
    expect(mockRequestAnimationFrame).toHaveBeenCalledTimes(5);
    expect(wrapper.instance().currentStep.current).toEqual(5);

    // Hack: Stop animation so it doesn't conflict with next test
    wrapper.find('#resetBtn').first().simulate('click');
  });

  it('Sets State to "done" when animation is over', async () => {
    jest.clearAllMocks();
    const wrapper = mount(<SortingClassComponent.WrappedComponent match={{ params: { alg: 'bubble-sort' } }} />);
    wrapper.instance().state.list = [3, 2, 5];
    wrapper.instance().getAlgOutput('bubble-sort');

    expect(wrapper.instance().state.animationState).toEqual('init');
    wrapper.find('#playBtn').first().simulate('click');
    expect(wrapper.instance().state.animationState).toEqual('playing');
    await new Promise((r) => setTimeout(r, (-20.19 * wrapper.instance().speedPercentageRef.current + 2000) * wrapper.instance().state.steps.length));
    expect(wrapper.instance().state.animationState).toEqual('done');

    // Hack: Stop animation so it doesn't conflict with next test
    wrapper.find('#resetBtn').first().simulate('click');
  });
});
