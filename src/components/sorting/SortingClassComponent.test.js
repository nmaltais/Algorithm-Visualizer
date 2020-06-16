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

  it('defaults to bubble-sort', () => {
    const wrapper = shallow(<SortingClassComponent.WrappedComponent match={{ params: { alg: 'something' } }} />);
    const mockGetAlgOutput = jest.spyOn(wrapper.instance(), 'getAlgOutput');
    wrapper.setProps({ match: { params: { } } });
    expect(mockGetAlgOutput).toHaveBeenCalledWith('bubble-sort');
    wrapper.setProps({ match: { } });
    expect(mockGetAlgOutput).toHaveBeenCalledWith('bubble-sort');
  });

  it('should display bubble-sort if no valid path selected', () => {
    let wrapper = shallow(<SortingClassComponent.WrappedComponent match={{ params: { alg: '' } }} />);
    expect(wrapper.contains(<h1>Bubble Sort</h1>)).toBeTruthy();
    wrapper = shallow(<SortingClassComponent.WrappedComponent match={{ params: {} }} />);
    expect(wrapper.contains(<h1>Bubble Sort</h1>)).toBeTruthy();
    wrapper = shallow(<SortingClassComponent.WrappedComponent match={{ params: { alg: 'qwerty' } }} />);
    expect(wrapper.contains(<h1>Bubble Sort</h1>)).toBeTruthy();
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
    wrapper.find('#speedSlider').simulate('change', { target: { value: 69 } });
    expect(mockChangeSpeed).toHaveBeenCalled();
  });
  it('animationSpeed slider changes the state correctly', () => {
    const wrapper = shallow(<SortingClassComponent.WrappedComponent match={{ params: { alg: 'bubble-sort' } }} />);
    expect(wrapper.instance().state.speedPercentage).toEqual(100);
    expect(wrapper.instance().speedPercentageRef.current).toEqual(100);
    wrapper.find('#speedSlider').simulate('change', { target: { value: 20 } });
    expect(wrapper.instance().state.speedPercentage).toEqual(20);
    expect(wrapper.instance().speedPercentageRef.current).toEqual(20);
    wrapper.find('#speedSlider').simulate('change', { target: { value: 78 } });
    expect(wrapper.instance().state.speedPercentage).toEqual(78);
    expect(wrapper.instance().speedPercentageRef.current).toEqual(78);
  });
  it('listLengthSlider slider change calls generateRandomBars', () => {
    const wrapper = shallow(<SortingClassComponent.WrappedComponent match={{ params: { alg: 'merge-sort' } }} />);
    const mockGenerateRandomBars = jest.spyOn(wrapper.instance(), 'generateRandomBars');
    wrapper.instance().forceUpdate();
    wrapper.find('#listLengthSlider').simulate('change', { target: { value: 40 } });
    expect(mockGenerateRandomBars).toHaveBeenCalled();
  });
  it('listLengthSlider slider changes the state & bars correctly', () => {
    const wrapper = shallow(<SortingClassComponent.WrappedComponent match={{ params: { alg: 'insertion-sort' } }} />);
    wrapper.find('#listLengthSlider').simulate('change', { target: { value: 40 } });
    expect(wrapper.instance().state.listLength).toEqual(40);
    expect(wrapper.instance().state.bars).toHaveLength(40);
    wrapper.find('#listLengthSlider').simulate('change', { target: { value: 3 } });
    expect(wrapper.instance().state.listLength).toEqual(3);
    expect(wrapper.instance().state.bars).toHaveLength(3);
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
    const wrapper = mount(<SortingClassComponent.WrappedComponent match={{ params: { alg: 'quick-sort' } }} />);
    wrapper.instance().speedPercentageRef.current = 90;

    expect(wrapper.instance().currentStep.current).toEqual(0);
    wrapper.find('#playBtn').first().simulate('click');
    expect(mockRequestAnimationFrame).toHaveBeenCalledWith(expect.any(Function));

    // Let the animation play for 5 steps and make sure 5 frames have been requested.
    await new Promise((r) => setTimeout(r, (-20 * wrapper.instance().speedPercentageRef.current + 2000) * 5));
    expect(mockPlayAnimation).toHaveBeenCalledTimes(1);
    expect(mockRequestAnimationFrame).toHaveBeenCalledTimes(5);
    expect(wrapper.instance().currentStep.current).toEqual(5);

    // Hack: Stop animation so it doesn't conflict with next test
    wrapper.find('#resetBtn').first().simulate('click');
  });

  it('Resets the bars', async () => {
    const mockRequestAnimationFrame = jest.spyOn(global, 'requestAnimationFrame');
    const wrapper = mount(<SortingClassComponent.WrappedComponent match={{ params: { alg: 'insertion-sort' } }} />);
    wrapper.instance().speedPercentageRef.current = 90;

    // Let the animation play for 5 steps.
    wrapper.find('#playBtn').last().simulate('click');
    await new Promise((r) => setTimeout(r, (-20 * wrapper.instance().speedPercentageRef.current + 2000) * 5));
    expect(mockRequestAnimationFrame).toHaveBeenCalledTimes(5);
    expect(wrapper.instance().currentStep.current).toEqual(5);

    // Press reset button and make sure the bars are reset.
    wrapper.find('#resetBtn').first().simulate('click');
    wrapper.instance().state.list.forEach((num, i) => {
      expect(wrapper.instance().state.bars[i].ref.current.style.backgroundColor).toEqual('rgb(116, 172, 255)');
      expect(wrapper.instance().state.bars[i].ref.current.querySelector('.bar').style.height).toEqual(`${num}vh`);
      expect(wrapper.instance().state.bars[i].ref.current.querySelector('.barValue').innerText).toEqual(`${num}`);
      expect(wrapper.instance().state.bars[i].ref.current.querySelector('.cursor1').style.display).toEqual('none');
      expect(wrapper.instance().state.bars[i].ref.current.querySelector('.cursor2').style.display).toEqual('none');
      expect(wrapper.instance().state.bars[i].ref.current.querySelector('.cursor3').style.display).toEqual('none');
    });

    // Hack: Stop animation so it doesn't conflict with next test
    wrapper.find('#resetBtn').first().simulate('click');
  });

  it('Generates random bars', async () => {
    const wrapper = mount(<SortingClassComponent.WrappedComponent match={{ params: { alg: 'merge-sort' } }} />);

    const barsBefore = wrapper.instance().state.bars;
    wrapper.find('#newRandomSet').last().simulate('click');
    const barsAfter = wrapper.instance().state.bars;
    expect(barsAfter).toHaveLength(barsBefore.length);
    expect(barsAfter).not.toEqual(barsBefore);
  });

  it('Pauses the animation', async () => {
    jest.clearAllMocks();
    const mockRequestAnimationFrame = jest.spyOn(global, 'requestAnimationFrame');
    const wrapper = mount(<SortingClassComponent.WrappedComponent match={{ params: { alg: 'bubble-sort' } }} />);
    wrapper.instance().speedPercentageRef.current = 90;

    // Let the animation play for 5 steps
    wrapper.find('#playBtn').first().simulate('click');
    await new Promise((r) => setTimeout(r, (-20 * wrapper.instance().speedPercentageRef.current + 2000) * 5));
    expect(mockRequestAnimationFrame).toHaveBeenCalledTimes(5);
    expect(wrapper.instance().currentStep.current).toEqual(5);

    // Pause the animation, wait and make sure no more frames having been requested.
    wrapper.find('#pauseBtn').first().simulate('click');
    await new Promise((r) => setTimeout(r, (-20 * wrapper.instance().speedPercentageRef.current + 2000) * 5));
    expect(mockRequestAnimationFrame).toHaveBeenCalledTimes(5);
    expect(wrapper.instance().currentStep.current).toEqual(5);

    // Hack: Stop animation so it doesn't conflict with next test
    wrapper.find('#resetBtn').first().simulate('click');
  });

  it('Sets State to "done" when animation is over', async () => {
    jest.clearAllMocks();
    const wrapper = mount(<SortingClassComponent.WrappedComponent match={{ params: { alg: 'selection-sort' } }} />);
    wrapper.instance().speedPercentageRef.current = 80;
    wrapper.instance().state.list = [3, 2, 5];
    wrapper.instance().getAlgOutput('selection-sort');

    expect(wrapper.instance().state.animationState).toEqual('init');
    wrapper.find('#playBtn').first().simulate('click');
    expect(wrapper.instance().state.animationState).toEqual('playing');
    await new Promise((r) => setTimeout(r, (-20 * wrapper.instance().speedPercentageRef.current + 2000) * wrapper.instance().state.steps.length));
    expect(wrapper.instance().state.animationState).toEqual('done');

    // Hack: Stop animation so it doesn't conflict with next test
    wrapper.find('#resetBtn').first().simulate('click');
  });
});
