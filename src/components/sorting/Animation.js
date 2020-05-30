/* eslint-disable no-param-reassign */

const defaultColor = '#8BD4D6';
const cursorColor = 'black';
const compareColor1 = '#ff7961';
const compareColor2 = '#f44336';

export function playAnimation(currentStep, lastCompared, lastSwapped, lastCursorPos, lastRequestID,
  barRefs, steps, timeOut, speedPercentageRef, setAnimationState) {
  setAnimationState('playing');

  function displayNextStep() {
    const step = steps[currentStep.current];
    switch (step.action) {
      case 'compare':
        if (barRefs.current) {
          if (lastCompared.current.length > 0) { // Reset colors for last compared columns
            barRefs.current[lastCompared.current[0]].current.style.backgroundColor = defaultColor;
            barRefs.current[lastCompared.current[1]].current.style.backgroundColor = defaultColor;
          }
          // Update colors for currently compared columns
          barRefs.current[step.i].current.style.backgroundColor = compareColor1;
          barRefs.current[step.j].current.style.backgroundColor = compareColor2;
          lastCompared.current = [step.i, step.j];
        }

        break;
      case 'swap': {
        if (barRefs.current) {
          // Swap heights, colors, and cursor for currently swapped indexes (giving the illusion that the bars being swapped)
          const iHeight = barRefs.current[step.i].current.style.height;
          const iColor = barRefs.current[step.i].current.style.backgroundColor;
          barRefs.current[step.i].current.style.height = barRefs.current[step.j].current.style.height;
          barRefs.current[step.i].current.innerText = parseInt(barRefs.current[step.i].current.style.height, 10);
          barRefs.current[step.j].current.style.height = iHeight;
          barRefs.current[step.j].current.innerText = parseInt(barRefs.current[step.j].current.style.height, 10);
          barRefs.current[step.i].current.style.backgroundColor = barRefs.current[step.j].current.style.backgroundColor;
          barRefs.current[step.j].current.style.backgroundColor = iColor;
          lastSwapped.current = [step.i, step.j];
        }
        break;
      }
      case 'move cursor':
        if (barRefs.current) {
          if (lastCursorPos.current !== null) {
            barRefs.current[lastCursorPos.current].current.style.borderTop = '0px';
          }
          barRefs.current[step.pos].current.style.borderTop = `10px solid ${cursorColor}`;
          lastCursorPos.current = step.pos;

          if (lastCompared.current.length > 0) { // Reset colors for last compared columns
            barRefs.current[lastCompared.current[0]].current.style.backgroundColor = defaultColor;
            barRefs.current[lastCompared.current[1]].current.style.backgroundColor = defaultColor;
          }
          if (lastSwapped.current.length > 0) { // Reset colors for last compared columns
            barRefs.current[lastSwapped.current[0]].current.style.backgroundColor = defaultColor;
            barRefs.current[lastSwapped.current[1]].current.style.backgroundColor = defaultColor;
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
        lastCursorPos,
        lastRequestID,
        barRefs,
        steps,
        timeOut,
        speedPercentageRef,
        setAnimationState),
      -20.19 * speedPercentageRef.current + 2000);
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

function resetbarRefs(barRefs, list) {
  list.forEach((num, i) => {
    barRefs.current[i].current.style.backgroundColor = defaultColor;
    barRefs.current[i].current.style.height = `${num}vh`;
    barRefs.current[i].current.style.borderTop = '0px';
  });
}
export function resetAnimation(currentStep, timeOut, lastRequestID, barRefs, list, setAnimationState) {
  setAnimationState('init');
  // Stop Animation
  cancelAnimationFrame(lastRequestID.current);
  clearTimeout(timeOut.current);
  // Reset currentStep and bars
  currentStep.current = 0;
  if (barRefs.current.length > 0 && barRefs.current[0].current) resetbarRefs(barRefs, list);
}
