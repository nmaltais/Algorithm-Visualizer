/* eslint-disable no-param-reassign */

function updatedGrid(grid, pos, newCell) {
  const gridCopy = [...grid];
  gridCopy[pos.y][pos.x] = { ...gridCopy[pos.y][pos.x], ...newCell };
  return gridCopy;
}

export function playAnimation(grid, setGrid, animationQueue, currentStep, lastRequestID, timeOut, speedPercentageRef, setAnimationState) {
  setAnimationState('playing');

  function displayNextStep() {
    const { steps, type } = animationQueue.current[0];
    const { x, y } = steps[currentStep.current];

    if (grid[y][x] !== undefined) {
      if (type === 'path') setGrid(updatedGrid(grid, { y, x }, { visited: true, onPath: true }));
      else if (type === 'visits') {
        if (currentStep.current > 0) {
          setGrid(updatedGrid(grid, { y: steps[currentStep.current - 1].y, x: steps[currentStep.current - 1].x }, { visited: true, visiting: false }));
        }
        setGrid(updatedGrid(grid, { y, x }, { visited: false, visiting: true }));
      }
    }

    currentStep.current += 1;
    if (currentStep.current < steps.length) {
      timeOut.current = setTimeout(() => playAnimation(grid,
        setGrid,
        animationQueue,
        currentStep,
        lastRequestID,
        timeOut,
        speedPercentageRef,
        setAnimationState),
      -20 * speedPercentageRef + 2000);
    } else {
      currentStep.current = 0;
      if (animationQueue.current.length > 1) {
        animationQueue.current.shift();
        currentStep.current = 0;
        playAnimation(grid, setGrid, animationQueue, currentStep, lastRequestID, timeOut, speedPercentageRef, setAnimationState);
      } else setAnimationState('done');
    }
  }
  // Update AnimationFrame RequestID
  lastRequestID = requestAnimationFrame(displayNextStep);
}

export function pauseAnimation(timeOut, lastRequestID, setAnimationState) {
  // Stop Animation
  cancelAnimationFrame(lastRequestID.current);
  clearTimeout(timeOut.current);
  setAnimationState('paused');
}
