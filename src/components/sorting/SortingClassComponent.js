/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Grid } from 'semantic-ui-react';
import './Sorting.scss';
import {
  BubbleSort, SelectionSort, InsertionSort, QuickSort, MergeSort,
} from './sorting-algorithms';
import { playAnimation, pauseAnimation, resetAnimation } from './Animation';
import Bar from './Bar';


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
      speedPercentage: 100,
      listLength: 24,
    };
    this.currentStep = React.createRef();
    this.lastCompared = React.createRef();
    this.lastSwapped = React.createRef();
    this.lastCursor1Pos = React.createRef();
    this.lastCursor2Pos = React.createRef();
    this.lastCursor3Pos = React.createRef();
    this.lastRequestID = React.createRef();
    this.timeOut = React.createRef();
    this.speedPercentageRef = React.createRef();
  }

  componentDidMount() {
    const { match } = this.props;

    this.currentStep.current = 0;
    this.lastCompared.current = [];
    this.lastSwapped.current = [];
    this.lastCursor1Pos.current = null;
    this.lastCursor2Pos.current = null;
    this.lastCursor3Pos.current = null;
    this.lastRequestID.current = null;
    this.timeOut.current = null;
    this.speedPercentageRef.current = 100;

    const alg = !match.params || !match.params.alg ? 'bubble-sort' : match.params.alg; // Default to bubble-sort
    this.getAlgOutput(alg);
    this.createBarsFromList();
  }

  componentDidUpdate(prevProps, prevState) {
    const { match } = this.props;
    const alg = !match.params || !match.params.alg ? 'bubble-sort' : match.params.alg; // Default to bubble-sort
    if (match.params && match.params.alg !== prevProps.match.params.alg) {
      console.log('Route change!');
      this.getAlgOutput(alg);
      resetAnimation(this.currentStep, this.timeOut, this.lastRequestID, this.state.bars, this.state.list, this.setAnimationState);
    }
    if (this.state.list !== prevState.list) {
      this.getAlgOutput(alg);
      this.createBarsFromList();
    }
  }

  getAlgOutput = (path) => {
    let algOutput = null;

    switch (path) {
      case 'bubble-sort':
        algOutput = BubbleSort(this.state.list.slice());
        break;
      case 'selection-sort':
        algOutput = SelectionSort(this.state.list.slice());
        break;
      case 'insertion-sort':
        algOutput = InsertionSort(this.state.list.slice());
        break;
      case 'quick-sort':
        algOutput = QuickSort(this.state.list.slice());
        break;
      case 'merge-sort':
        algOutput = MergeSort(this.state.list.slice());
        break;
      default:
        algOutput = BubbleSort(this.state.list.slice());
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
      const bar = <Bar key={i} ref={ref} num={num} height={((100 * (12 / 16)) - 20) / this.state.list.length} />;
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

  generateRandomBars = (amount) => {
    const list = [];
    for (let i = 0; i < amount; i++) {
      // Get random number between 80 and 5
      const num = Math.floor(Math.random() * (80 - 3 + 1)) + 3;
      list.push(num);
    }
    this.setState({ list });
  }

  render() {
    return (
      <Grid stackable id="container">
        <Grid.Row>
          <Grid.Column width={4}>
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
            <pre>
              {this.state.info.pseudoCode}
            </pre>
          </Grid.Column>
          <Grid.Column width={12}>
            {this.state.animationState === 'playing'
              ? <Button id="pauseBtn" icon="pause" content="Pause" onClick={() => pauseAnimation(this.timeOut, this.lastRequestID, this.setAnimationState)} />
              : (
                <Button
                  id="playBtn"
                  disabled={this.state.animationState === 'done'}
                  icon="play"
                  content="Play"
                  onClick={() => {
                    playAnimation(this.currentStep, this.lastCompared, this.lastSwapped, this.lastCursor1Pos, this.lastCursor2Pos, this.lastCursor3Pos, this.lastRequestID,
                      this.state.bars, this.state.steps, this.timeOut, this.speedPercentageRef,
                      this.setAnimationState);
                  }}
                />
              )}
            <Button
              id="resetBtn"
              icon="repeat"
              content="Reset"
              onClick={() => resetAnimation(this.currentStep, this.timeOut, this.lastRequestID, this.state.bars, this.state.list, this.setAnimationState)}
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
            {` ${this.state.speedPercentage}%`}
            <br />
            {' Number of Values: '}
            <input
              id="listLengthSlider"
              type="range"
              min={3}
              max={50}
              value={this.state.listLength}
              onChange={(e) => {
                resetAnimation(this.currentStep, this.timeOut, this.lastRequestID, this.state.bars, this.state.list, this.setAnimationState);
                this.setState({ listLength: e.target.value });
                this.generateRandomBars(e.target.value);
              }}
            />
            {` ${this.state.listLength}`}
            <Button
              id="newRandomSet"
              icon="random"
              content="New Random Set"
              onClick={() => {
                resetAnimation(this.currentStep, this.timeOut, this.lastRequestID, this.state.bars, this.state.list, this.setAnimationState);
                this.generateRandomBars(this.state.listLength);
              }}
              style={{ margin: '0px 10px' }}
            />
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
