/* eslint-disable no-plusplus */
import React, { useState, useRef } from 'react';
import ToolMenu from './ToolMenu';
import Grid2D from './Grid2D';
// import DFS from './DFS';
import BFS from './BFS';
import { playAnimation, pauseAnimation } from './Animation';

function Create2DArray(height, width) {
  const arr = [];
  for (let y = 0; y < height; y++) {
    arr.push([]);
    for (let x = 0; x < width; x++) {
      arr[y].push({
        pos: { x, y },
        type: 'empty',
        visited: false,
        visiting: false,
      });
    }
  }
  return arr;
}

function Pathfinding() {
  const [selectedItem, setSelectedItem] = useState(null);
  const initialInventory = {
    player: 1,
    wall: 50,
    treasure: 1,
    empty: Infinity,
  };
  const [inventory, setInventory] = useState(initialInventory);
  const [playerPos, setPlayerPos] = useState(null);
  const [goalPos, setGoalPos] = useState(null);
  const [grid, setGrid] = useState(null);
  const [animationState, setAnimationState] = useState('default');
  const timeOut = useRef(null);
  const lastRequestID = useRef(null);
  const currentStep = useRef(0);
  const animationQueue = useRef([]);

  const find = () => {
    const { visits, path } = BFS(playerPos, grid, goalPos);

    if (visits.length > 1) {
      if (animationQueue.current.length === 0) { // If first time playing animation
        if (path.length > 0) {
          animationQueue.current = [{
            steps: visits,
            type: 'visits',
          }, {
            steps: path,
            type: 'path',
          }];
        } else {
          animationQueue.current = [{
            steps: visits,
            type: 'visits',
          }];
        }
      }

      playAnimation(grid, setGrid, animationQueue, currentStep, lastRequestID, timeOut, 100, setAnimationState);
    }
  };

  const reset = () => {
    pauseAnimation(timeOut, lastRequestID, setAnimationState);
    currentStep.current = 0;
    animationQueue.current = [];
    setGrid(null);
    setInventory(initialInventory);
    setAnimationState('init');
  };

  const pause = () => {
    pauseAnimation(timeOut, lastRequestID, setAnimationState);
  };

  return (
    <div style={{ padding: '30px' }}>
      <ToolMenu
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        inventory={inventory}
        find={find}
        reset={reset}
        pause={pause}
        animationState={animationState}
      />
      <Grid2D
        width={35}
        height={20}
        selectedItem={selectedItem}
        inventory={inventory}
        setInventory={setInventory}
        setPlayerPos={setPlayerPos}
        setGoalPos={setGoalPos}
        setGrid={setGrid}
        grid={grid || Create2DArray(20, 35)}
      />
    </div>
  );
}

export default Pathfinding;
