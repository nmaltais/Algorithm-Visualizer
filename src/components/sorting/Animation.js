/* eslint-disable no-param-reassign */

const defaultColor = 'rgb(116, 172, 255)';
const compareColor1 = '#ff7961';
const compareColor2 = '#f44336';

export function playAnimation(currentStep, lastCompared, lastSwapped, lastCursor1Pos, lastCursor2Pos, lastCursor3Pos, lastRequestID,
  bars, steps, timeOut, speedPercentageRef, setAnimationState) {
  setAnimationState('playing');

  function displayNextStep() {
    const step = steps[currentStep.current];

    switch (step.action) {
      case 'compare':
        if (bars) {
          if (lastCompared.current.length > 0) { // Reset colors for last compared columns
            bars[lastCompared.current[0]].ref.current.style.backgroundColor = defaultColor;
            bars[lastCompared.current[1]].ref.current.style.backgroundColor = defaultColor;
          }
          // Update colors for currently compared columns
          bars[step.i].ref.current.style.backgroundColor = compareColor1;
          bars[step.j].ref.current.style.backgroundColor = compareColor2;

          lastCompared.current = [step.i, step.j];
        }

        break;
      case 'swap': {
        if (bars) {
          // Swap heights, colors, and cursor for currently swapped indexes (giving the illusion that the bars being swapped)
          const iHeight = bars[step.i].ref.current.querySelector('.bar').style.height;
          const jHeight = bars[step.j].ref.current.querySelector('.bar').style.height;

          const iColor = bars[step.i].ref.current.style.backgroundColor;
          const jColor = bars[step.j].ref.current.style.backgroundColor;
          // Swap values
          bars[step.i].ref.current.querySelector('.barValue').innerText = parseInt(jHeight, 10);
          bars[step.j].ref.current.querySelector('.barValue').innerText = parseInt(iHeight, 10);
          // Swap Heights
          bars[step.i].ref.current.querySelector('.bar').style.height = jHeight;
          bars[step.j].ref.current.querySelector('.bar').style.height = iHeight;
          // Swap colors
          bars[step.i].ref.current.style.backgroundColor = jColor;
          bars[step.j].ref.current.style.backgroundColor = iColor;
          lastSwapped.current = [step.i, step.j];
        }
        break;
      }
      case 'move cursor1':
        if (bars) {
          if (lastCursor1Pos.current !== null) {
            bars[lastCursor1Pos.current].ref.current.querySelector('.cursor1').style.display = 'none';
          }

          if (step.pos >= bars.length) {
            lastCursor1Pos.current = null;
          } else {
            bars[step.pos].ref.current.querySelector('.cursor1').style.display = 'block';
            if (step.label) bars[step.pos].ref.current.querySelector('.cursor1').innerText = step.label;
            lastCursor1Pos.current = step.pos;
          }

          if (lastCompared.current.length > 0) { // Reset colors for last compared columns
            bars[lastCompared.current[0]].ref.current.style.backgroundColor = defaultColor;
            bars[lastCompared.current[1]].ref.current.style.backgroundColor = defaultColor;
          }
          if (lastSwapped.current.length > 0) { // Reset colors for last swapped columns
            bars[lastSwapped.current[0]].ref.current.style.backgroundColor = defaultColor;
            bars[lastSwapped.current[1]].ref.current.style.backgroundColor = defaultColor;
          }
        }
        break;
      case 'move cursor2':
        if (bars) {
          if (lastCursor2Pos.current !== null) {
            bars[lastCursor2Pos.current].ref.current.querySelector('.cursor2').style.display = 'none';
          }

          if (step.pos >= bars.length) {
            lastCursor2Pos.current = null;
          } else {
            bars[step.pos].ref.current.querySelector('.cursor2').style.display = 'block';
            if (step.label) bars[step.pos].ref.current.querySelector('.cursor2').innerText = step.label;
            lastCursor2Pos.current = step.pos;
          }

          if (lastCompared.current.length > 0) { // Reset colors for last compared columns
            bars[lastCompared.current[0]].ref.current.style.backgroundColor = defaultColor;
            bars[lastCompared.current[1]].ref.current.style.backgroundColor = defaultColor;
          }
          if (lastSwapped.current.length > 0) { // Reset colors for last swapped columns
            bars[lastSwapped.current[0]].ref.current.style.backgroundColor = defaultColor;
            bars[lastSwapped.current[1]].ref.current.style.backgroundColor = defaultColor;
          }
        }
        break;
      case 'move cursor3':
        if (bars) {
          if (lastCursor3Pos.current !== null) {
            bars[lastCursor3Pos.current].ref.current.querySelector('.cursor3').style.display = 'none';
          }

          if (step.pos >= bars.length) {
            lastCursor3Pos.current = null;
          } else {
            bars[step.pos].ref.current.querySelector('.cursor3').style.display = 'block';
            if (step.label) bars[step.pos].ref.current.querySelector('.cursor3').innerText = step.label;
            lastCursor3Pos.current = step.pos;
          }

          if (lastCompared.current.length > 0) { // Reset colors for last compared columns
            bars[lastCompared.current[0]].ref.current.style.backgroundColor = defaultColor;
            bars[lastCompared.current[1]].ref.current.style.backgroundColor = defaultColor;
          }
          if (lastSwapped.current.length > 0) { // Reset colors for last swapped columns
            bars[lastSwapped.current[0]].ref.current.style.backgroundColor = defaultColor;
            bars[lastSwapped.current[1]].ref.current.style.backgroundColor = defaultColor;
          }
        }
        break;
      default:
        console.log('default case');
        break;
    }
    currentStep.current += 1;
    if (currentStep.current < steps.length) {
      timeOut.current = setTimeout(() => playAnimation(currentStep,
        lastCompared,
        lastSwapped,
        lastCursor1Pos,
        lastCursor2Pos,
        lastCursor3Pos,
        lastRequestID,
        bars,
        steps,
        timeOut,
        speedPercentageRef,
        setAnimationState),
      -20 * speedPercentageRef.current + 2000);
    } else {
      setAnimationState('done');
    }
  }
  // Update AnimationFrame RequestID
  lastRequestID.current = requestAnimationFrame(displayNextStep);
}


export function pauseAnimation(timeOut, lastRequestID, setAnimationState) {
  // Stop Animation
  cancelAnimationFrame(lastRequestID.current);
  clearTimeout(timeOut.current);
  setAnimationState('paused');
}

function resetbarRefs(bars, list) {
  list.forEach((num, i) => {
    bars[i].ref.current.style.backgroundColor = defaultColor;
    bars[i].ref.current.querySelector('.bar').style.height = `${num}vh`;
    bars[i].ref.current.querySelector('.barValue').innerText = `${num}`;
    bars[i].ref.current.querySelector('.cursor1').style.display = 'none';
    bars[i].ref.current.querySelector('.cursor2').style.display = 'none';
    bars[i].ref.current.querySelector('.cursor3').style.display = 'none';
  });
}
export function resetAnimation(currentStep, timeOut, lastRequestID, bars, list, setAnimationState) {
  setAnimationState('init');
  // Stop Animation
  cancelAnimationFrame(lastRequestID.current);
  clearTimeout(timeOut.current);
  // Reset currentStep and bars
  currentStep.current = 0;
  if (bars.length > 0 && bars[0].ref.current) resetbarRefs(bars, list);
}
