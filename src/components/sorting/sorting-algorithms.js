/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */

function swap(a, b, arr) {
  const temp = arr[b];
  arr[b] = arr[a];
  arr[a] = temp;
}

export function BubbleSort(list) {
  const steps = [];
  let swapped = true;
  let count = 1;
  steps.push({ action: 'move cursor', pos: list.length - count });
  while (swapped) {
    swapped = false;
    for (let i = 0; i < list.length - count; i++) {
      steps.push({ action: 'compare', i, j: i + 1 });
      if (list[i] > list[i + 1]) {
        swapped = true;
        swap(i, i + 1, list);
        steps.push({ action: 'swap', i, j: i + 1 });
      }
    }
    count += 1;
    if (list.length - count >= 0) steps.push({ action: 'move cursor', pos: list.length - count });
  }
  return {
    orderedList: list,
    steps,
    info: {
      title: 'Bubble Sort',
      worstTime: 'O(n^2)',
      bestTime: 'O(n)',
      avgTime: 'O(n^2)',
      space: 'O(n)',
    },
  };
}

export function InsertionSort(list) {
  const steps = [];
  list.forEach((el, i) => {
    let j = i;
    steps.push({ action: 'move cursor', pos: i });
    if (j > 0) steps.push({ action: 'compare', i: j - 1, j });
    while (j > 0 && list[j - 1] > list[j]) {
      swap(j - 1, j, list);
      steps.push({ action: 'swap', i: j - 1, j });
      j--;
      if (j > 0) steps.push({ action: 'compare', i: j - 1, j });
    }
  });
  return {
    orderedList: list,
    steps,
    info: {
      title: 'Insertion Sort',
      worstTime: 'O(n^2)',
      bestTime: 'O(n)',
      avgTime: 'O(n^2)',
      space: 'O(n)',
    },
  };
}

export function SelectionSort(list) {
  const steps = [];
  let sortedArrLen = 0;
  while (sortedArrLen < list.length) {
    let cur = sortedArrLen;
    steps.push({ action: 'move cursor', pos: cur });
    for (let i = sortedArrLen + 1; i < list.length; i++) {
      steps.push({ action: 'compare', i, j: cur });
      if (list[i] < list[cur]) {
        cur = i;
      }
    }
    swap(sortedArrLen, cur, list);
    steps.push({ action: 'swap', i: sortedArrLen, j: cur });
    sortedArrLen++;
  }
  return {
    orderedList: list,
    steps,
    info: {
      title: 'Selection Sort',
      worstTime: 'O(n^2)',
      bestTime: 'O(n^2)',
      avgTime: 'O(n^2)',
      space: 'O(1)',
    },
  };
}

export default { BubbleSort, InsertionSort, SelectionSort };
