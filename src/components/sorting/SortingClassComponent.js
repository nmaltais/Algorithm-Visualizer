/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Grid } from 'semantic-ui-react';
import './Sorting.scss';
import { BubbleSort, InsertionSort } from './sorting-algorithms';
import { playAnimation, pauseAnimation, resetAnimation } from './Animation';


class SortingClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [20, 64, 23, 35, 35, 75, 34, 69,
        76, 57, 9, 67, 33, 58, 7, 27, 22,
        56, 37, 5, 79, 36, 46, 65],
      info: '',
      steps: [],
      animationState: 'init',
      speedPercentage: 80,
    };
    this.barRefs = React.createRef();
    this.currentStep = React.createRef();
    this.lastCompared = React.createRef();
    this.lastCursorPos = React.createRef();
    this.lastRequestID = React.createRef();
    this.timeOut = React.createRef();
    this.speedPercentageRef = React.createRef();
  }

  componentDidMount() {
    const { match } = this.props;

    this.barRefs.current = [];
    this.currentStep.current = 0;
    this.lastCompared.current = [];
    this.lastCursorPos.current = null;
    this.lastRequestID.current = null;
    this.timeOut.current = null;
    this.speedPercentageRef.current = 80;

    const alg = match.params.alg ? match.params.alg : 'bubble-sort';
    this.getAlgOutput(alg);
    this.createBarsFromList();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.alg !== prevProps.match.params.alg) {
      console.log('Route change!');
      this.getAlgOutput(this.props.match.params.alg);
      resetAnimation(this.currentStep, this.timeOut, this.lastRequestID, this.barRefs, this.state.list, this.setAnimationState);
    }
  }

  getAlgOutput = (path) => {
    let algOutput = null;

    switch (path) {
      case 'bubble-sort':
        algOutput = BubbleSort(this.state.list.slice());
        break;
      case 'insertion-sort':
        algOutput = InsertionSort(this.state.list.slice());
        break;
      default:
        console.log('no-alg');
        break;
    }
    if (algOutput !== null) {
      this.setState({ steps: algOutput.steps });
      this.setState({ info: algOutput.info });
    }
  }

  createBarsFromList = () => {
    const { list } = this.state;
    const localBars = list.map((num, i) => {
      const ref = React.createRef();
      const bar = (
        <span
          key={i}
          ref={ref}
          style={{ height: `${num}vh`, width: `${((100 * (12 / 16)) - 20) / this.state.list.length}vw`, maxWidth: '50px' }}
          className="bar"
        >
          {num}
        </span>
      );
      this.barRefs.current.push(ref);
      return bar;
    });
    this.setState({ bars: localBars });
  }

  setAnimationState = (animationState) => {
    this.setState({ animationState });
  }

  changeSpeed = (e) => {
    this.speedPercentageRef.current = e.target.value;
    this.setState({ speedPercentage: e.target.value });
  }


  render() {
    return (
      <Grid stackable id="container">
        <Grid.Row>
          <Grid.Column width={3}>
            <h1>{this.state.info.title}</h1>
            <p>
              <span>{'Worst Time: '}</span>
              <span>{this.state.info.worstTime}</span>
              <br />
              <span>{'Avg. Time: '}</span>
              <span>{this.state.info.avgTime}</span>
              <br />
              <span>{'Best Time: '}</span>
              <span>{this.state.info.bestTime}</span>
              <br />
              <span>{'Space: '}</span>
              <span>{this.state.info.space}</span>
            </p>
          </Grid.Column>
          <Grid.Column width={13}>
            {this.state.animationState === 'playing'
              ? <Button id="pauseBtn" icon="pause" content="Pause" onClick={() => pauseAnimation(this.timeOut, this.lastRequestID, this.setAnimationState)} />
              : (
                <Button
                  id="playBtn"
                  disabled={this.state.animationState === 'done'}
                  icon="play"
                  content="Play"
                  onClick={() => playAnimation(this.currentStep, this.lastCompared, this.lastCursorPos, this.lastRequestID,
                    this.barRefs, this.state.steps, this.timeOut, this.speedPercentageRef,
                    this.setAnimationState)}
                />
              )}
            <Button
              id="resetBtn"
              icon="repeat"
              content="Reset"
              onClick={() => resetAnimation(this.currentStep, this.timeOut, this.lastRequestID, this.barRefs, this.state.list, this.setAnimationState)}
            />
            {' Speed: '}
            <input
              id="speedSlider"
              type="range"
              min={0}
              max={100}
              value={this.state.speedPercentage}
              onChange={this.changeSpeed}
            />
            {`${this.state.speedPercentage}%`}
            <br />
            <br />
            {this.state.bars}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default withRouter(SortingClassComponent);
