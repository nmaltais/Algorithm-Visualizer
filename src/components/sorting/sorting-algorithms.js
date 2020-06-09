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
  steps.push({ action: 'move cursor1', pos: list.length - count, label: 'cur1' });
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
    if (list.length - count >= 0) steps.push({ action: 'move cursor1', pos: list.length - count, label: 'cur1' });
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
    steps.push({ action: 'move cursor1', pos: i, label: 'cur1' });
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
    steps.push({ action: 'move cursor1', pos: cur, label: 'cur1' });
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

function partition(list, left, right, pivotIdx, steps) {
  steps.push({ action: 'move cursor2', pos: left, label: 'low' });
  steps.push({ action: 'move cursor3', pos: right, label: 'high' });
  while (left <= right) {
    steps.push({ action: 'compare', i: left, j: pivotIdx });
    while (list[left] < list[pivotIdx]) {
      steps.push({ action: 'compare', i: left, j: pivotIdx });
      left++;
      steps.push({ action: 'move cursor2', pos: left, label: 'low' });
    }

    steps.push({ action: 'compare', i: right, j: pivotIdx });
    while (list[pivotIdx] < list[right]) {
      steps.push({ action: 'compare', i: right, j: pivotIdx });
      right--;
      steps.push({ action: 'move cursor3', pos: right, label: 'high' });
    }

    steps.push({ action: 'compare', i: left, j: right });
    if (left <= right) {
      swap(left, right, list);
      steps.push({ action: 'swap', i: left, j: right });

      if (pivotIdx === left) {
        pivotIdx = right;
        steps.push({ action: 'move cursor1', pos: pivotIdx, label: 'pivot' });
      } else if (pivotIdx === right) {
        pivotIdx = left;
        steps.push({ action: 'move cursor1', pos: pivotIdx, label: 'pivot' });
      }

      left++;
      steps.push({ action: 'move cursor2', pos: left, label: 'low' });

      right--;
      steps.push({ action: 'move cursor3', pos: right, label: 'high' });
    }
  }
  return left;
}
export function QuickSort(list, lowerBound = 0, upperBound = list.length - 1, steps = []) {
  if (lowerBound >= upperBound) {
    return {
      orderedList: list,
      steps,
      info: {
        title: 'Quick Sort',
        worstTime: 'O(n^2)',
        bestTime: 'O(n * log(n))',
        avgTime: 'O(n * log(n))',
        space: 'O(log(n))',
      },
    };
  }
  const pivotIdx = Math.floor((lowerBound + upperBound) / 2);
  steps.push({ action: 'move cursor1', pos: pivotIdx, label: 'pivot' });
  const index = partition(list, lowerBound, upperBound, pivotIdx, steps);

  // Run recursively on the smallest sub-array to optimize space complexity
  const leftSubArrayIsSmaller = (index - 1) - lowerBound < upperBound - index;
  if (leftSubArrayIsSmaller) {
    QuickSort(list, lowerBound, index - 1, steps);
    QuickSort(list, index, upperBound, steps);
  } else {
    QuickSort(list, index, upperBound, steps);
    QuickSort(list, lowerBound, index - 1, steps);
  }
  return {
    orderedList: list,
    steps,
    info: {
      title: 'Quick Sort',
      worstTime: 'O(n^2)',
      bestTime: 'O(n * log(n))',
      avgTime: 'O(n * log(n))',
      space: 'O(log(n))',
    },
  };
}

// Merge Sort
function merge(list, lo, mid, hi, steps) {
  const sortedList = [];
  let i = lo;
  let j = mid + 1;
  while (i <= mid && j <= hi) {
    steps.push({ action: 'move cursor1', pos: i, label: 'left' });
    steps.push({ action: 'move cursor2', pos: j, label: 'right' });
    steps.push({ action: 'compare', i, j });

    if (list[i] <= list[j]) {
      steps.push({ action: 'move cursor3', pos: lo + sortedList.length, label: 'sort' });
      sortedList.push(list[i]);
      steps.push({ action: 'replace', pos: lo + sortedList.length - 1, value: list[i] });
      i++;
    } else {
      steps.push({ action: 'move cursor3', pos: lo + sortedList.length, label: 'sort' });
      sortedList.push(list[j]);
      steps.push({ action: 'replace', pos: lo + sortedList.length - 1, value: list[j] });
      j++;
    }
  }
  while (i <= mid) {
    steps.push({ action: 'move cursor1', pos: i, label: 'left' });
    steps.push({ action: 'compare', i, j: i });
    steps.push({ action: 'move cursor3', pos: lo + sortedList.length, label: 'sort' });
    sortedList.push(list[i]);
    steps.push({ action: 'replace', pos: lo + sortedList.length - 1, value: list[i] });
    i++;
  }
  while (j <= hi) {
    steps.push({ action: 'move cursor2', pos: j, label: 'right' });
    steps.push({ action: 'compare', i: j, j });
    steps.push({ action: 'move cursor3', pos: lo + sortedList.length, label: 'sort' });
    sortedList.push(list[j]);
    steps.push({ action: 'replace', pos: lo + sortedList.length - 1, value: list[j] });
    j++;
  }
  for (let k = lo; k <= hi; k++) {
    list[k] = sortedList[k - lo];
  }
}
export function MergeSort(list, lo = 0, hi = list.length - 1, steps = []) {
  if (lo >= hi) {
    return {
      orderedList: list,
      steps,
      info: {
        title: 'Merge Sort',
        worstTime: 'O(n * log(n))',
        bestTime: 'O(n * log(n))',
        avgTime: 'O(n * log(n))',
        space: 'O(n)',
      },
    };
  }
  const mid = Math.floor((lo + hi) / 2);
  MergeSort(list, lo, mid, steps);
  MergeSort(list, mid + 1, hi, steps);
  merge(list, lo, mid, hi, steps);

  return {
    orderedList: list,
    steps,
    info: {
      title: 'Merge Sort',
      worstTime: 'O(n * log(n))',
      bestTime: 'O(n * log(n))',
      avgTime: 'O(n * log(n))',
      space: 'O(n)',
    },
  };
}

export default {
  BubbleSort, InsertionSort, SelectionSort, QuickSort, MergeSort,
};
