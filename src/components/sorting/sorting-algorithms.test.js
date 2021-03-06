import {
  BubbleSort, InsertionSort, SelectionSort, QuickSort, MergeSort,
} from './sorting-algorithms';

describe('Bubble Sort Test', () => {
  it('Empty Array', () => {
    const arr = [];
    const res = BubbleSort(arr);
    expect(res.orderedList).toEqual([]);
  });

  it('Single Value', () => {
    const arr = [1];
    const res = BubbleSort(arr);
    expect(res.orderedList).toEqual([1]);
  });

  it('All Same Value', () => {
    const arr = [6, 6, 6, 6, 6, 6, 6, 6, 6];
    const res = BubbleSort(arr);
    expect(res.orderedList).toEqual([6, 6, 6, 6, 6, 6, 6, 6, 6]);
  });

  it('All Zeros', () => {
    const arr = [0, 0, 0, 0, 0];
    const res = BubbleSort(arr);
    expect(res.orderedList).toEqual([0, 0, 0, 0, 0]);
  });

  it('Unsorted Array', () => {
    const arr = [1, 3, 8, 6, 4, 3, 8, 0, 9, 10, 223, 4, 6, -3];
    const res = BubbleSort(arr);
    expect(res.orderedList).toEqual([-3, 0, 1, 3, 3, 4, 4, 6, 6, 8, 8, 9, 10, 223]);
  });

  it('Reversed Array', () => {
    const arr = [14839, 8559, 3456, 1203, 803, 503, 200, 130, 50, 19, 2, 9, 0, -2, -34, -40];
    const res = BubbleSort(arr);
    expect(res.orderedList).toEqual([-40, -34, -2, 0, 2, 9, 19, 50, 130, 200, 503, 803, 1203, 3456, 8559, 14839]);
  });

  it('Ordered Array', () => {
    const arr = [-3, 0, 1, 3, 3, 4, 4, 6, 6, 8, 8, 9, 10, 223];
    const res = BubbleSort(arr);
    expect(res.orderedList).toEqual([-3, 0, 1, 3, 3, 4, 4, 6, 6, 8, 8, 9, 10, 223]);
  });

  it('Returns correct algInfo', () => {
    const arr = [];
    const res = BubbleSort(arr);
    expect(res.info).toEqual({
      title: 'Bubble Sort',
      worstTime: 'O(n^2)',
      bestTime: 'O(n)',
      avgTime: 'O(n^2)',
      space: 'O(n)',
      pseudoCode: `function BubbleSort(list) {
  swapped = true;
  count = 1;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < list.length - count; i++) {
      if (list[i] > list[i + 1]) {
        swapped = true;
        swap(i, i + 1, list);
      }
    }
    count += 1;
  }
  return list;
}`,
    });
  });

  it('Returns some steps', () => {
    const arr = [3, 1, 4];
    const res = BubbleSort(arr);
    expect(res.steps.length > 0).toBeTruthy();
    expect(res.steps[0]).toEqual({
      action: 'move cursor1',
      pos: arr.length - 1,
      label: 'cur1',
    });
    // Not testing all steps...
  });
});

describe('Insertion Sort Test', () => {
  it('Empty Array', () => {
    const arr = [];
    const res = InsertionSort(arr);
    expect(res.orderedList).toEqual([]);
  });

  it('Single Value', () => {
    const arr = [1];
    const res = InsertionSort(arr);
    expect(res.orderedList).toEqual([1]);
  });

  it('All Same Value', () => {
    const arr = [6, 6, 6, 6, 6, 6, 6, 6, 6];
    const res = InsertionSort(arr);
    expect(res.orderedList).toEqual([6, 6, 6, 6, 6, 6, 6, 6, 6]);
  });

  it('All Zeros', () => {
    const arr = [0, 0, 0, 0, 0];
    const res = InsertionSort(arr);
    expect(res.orderedList).toEqual([0, 0, 0, 0, 0]);
  });

  it('Unsorted Array', () => {
    const arr = [1, 3, 8, 6, 4, 3, 8, 0, 9, 10, 223, 4, 6, -3];
    const res = InsertionSort(arr);
    expect(res.orderedList).toEqual([-3, 0, 1, 3, 3, 4, 4, 6, 6, 8, 8, 9, 10, 223]);
  });

  it('Reversed Array', () => {
    const arr = [14839, 8559, 3456, 1203, 803, 503, 200, 130, 50, 19, 2, 9, 0, -2, -34, -40];
    const res = InsertionSort(arr);
    // eslint-disable-next-line max-len
    expect(res.orderedList).toEqual([-40, -34, -2, 0, 2, 9, 19, 50, 130, 200, 503, 803, 1203, 3456, 8559, 14839]);
  });

  it('Ordered Array', () => {
    const arr = [-3, 0, 1, 3, 3, 4, 4, 6, 6, 8, 8, 9, 10, 223];
    const res = InsertionSort(arr);
    expect(res.orderedList).toEqual([-3, 0, 1, 3, 3, 4, 4, 6, 6, 8, 8, 9, 10, 223]);
  });

  it('Returns correct algInfo', () => {
    const arr = [];
    const res = InsertionSort(arr);
    expect(res.info).toEqual({
      title: 'Insertion Sort',
      worstTime: 'O(n^2)',
      bestTime: 'O(n)',
      avgTime: 'O(n^2)',
      space: 'O(n)',
      pseudoCode: `function InsertionSort(list) {
  const steps = [];
  list.forEach((el, i) => {
    let j = i;
    while (j > 0 && list[j - 1] > list[j]) {
      swap(j - 1, j, list);
      j--;
    }
  });
  return list;
}`,
    });
  });

  it('Returns some steps', () => {
    const arr = [3, 1, 4];
    const res = InsertionSort(arr);
    expect(res.steps.length > 0).toBeTruthy();
    expect(res.steps[0]).toEqual({
      action: 'move cursor1',
      pos: 0,
      label: 'cur1',
    });
    expect(res.steps[1]).toEqual({
      action: 'move cursor1',
      pos: 1,
      label: 'cur1',
    });
    expect(res.steps[2]).toEqual({
      action: 'compare',
      i: 0,
      j: 1,
    });
    expect(res.steps[3]).toEqual({
      action: 'swap',
      i: 0,
      j: 1,
    });
    expect(res.steps[4]).toEqual({
      action: 'move cursor1',
      pos: 2,
      label: 'cur1',
    });
    expect(res.steps[5]).toEqual({
      action: 'compare',
      i: 1,
      j: 2,
    });
    // Not testing all steps...
  });
});

describe('Selection Sort Test', () => {
  it('Empty Array', () => {
    const arr = [];
    const res = SelectionSort(arr);
    expect(res.orderedList).toEqual([]);
  });

  it('Single Value', () => {
    const arr = [1];
    const res = SelectionSort(arr);
    expect(res.orderedList).toEqual([1]);
  });

  it('All Same Value', () => {
    const arr = [6, 6, 6, 6, 6, 6, 6, 6, 6];
    const res = SelectionSort(arr);
    expect(res.orderedList).toEqual([6, 6, 6, 6, 6, 6, 6, 6, 6]);
  });

  it('All Zeros', () => {
    const arr = [0, 0, 0, 0, 0];
    const res = SelectionSort(arr);
    expect(res.orderedList).toEqual([0, 0, 0, 0, 0]);
  });

  it('Unsorted Array', () => {
    const arr = [1, 3, 8, 6, 4, 3, 8, 0, 9, 10, 223, 4, 6, -3];
    const res = SelectionSort(arr);
    expect(res.orderedList).toEqual([-3, 0, 1, 3, 3, 4, 4, 6, 6, 8, 8, 9, 10, 223]);
  });

  it('Reversed Array', () => {
    const arr = [14839, 8559, 3456, 1203, 803, 503, 200, 130, 50, 19, 2, 9, 0, -2, -34, -40];
    const res = SelectionSort(arr);
    // eslint-disable-next-line max-len
    expect(res.orderedList).toEqual([-40, -34, -2, 0, 2, 9, 19, 50, 130, 200, 503, 803, 1203, 3456, 8559, 14839]);
  });

  it('Ordered Array', () => {
    const arr = [-3, 0, 1, 3, 3, 4, 4, 6, 6, 8, 8, 9, 10, 223];
    const res = SelectionSort(arr);
    expect(res.orderedList).toEqual([-3, 0, 1, 3, 3, 4, 4, 6, 6, 8, 8, 9, 10, 223]);
  });

  it('Returns correct algInfo', () => {
    const arr = [];
    const res = SelectionSort(arr);
    expect(res.info).toEqual({
      title: 'Selection Sort',
      worstTime: 'O(n^2)',
      bestTime: 'O(n^2)',
      avgTime: 'O(n^2)',
      space: 'O(1)',
      pseudoCode: `function SelectionSort(list) {
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
  return list;
}`,
    });
  });

  it('Returns some steps', () => {
    const arr = [20, 64, 23];
    const res = SelectionSort(arr);
    expect(res.steps.length > 0).toBeTruthy();
    expect(res.steps[0]).toEqual({
      action: 'move cursor1',
      pos: 0,
      label: 'cur1',
    });
    expect(res.steps[1]).toEqual({
      action: 'compare',
      i: 1,
      j: 0,
    });
    expect(res.steps[2]).toEqual({
      action: 'compare',
      i: 2,
      j: 0,
    });
    // Not testing all steps...
  });
});

describe('Quick Sort Test', () => {
  it('Empty Array', () => {
    const arr = [];
    const res = QuickSort(arr);
    expect(res.orderedList).toEqual([]);
  });

  it('Single Value', () => {
    const arr = [1];
    const res = QuickSort(arr);
    expect(res.orderedList).toEqual([1]);
  });

  it('All Same Value', () => {
    const arr = [6, 6, 6, 6, 6, 6, 6, 6, 6];
    const res = QuickSort(arr);
    expect(res.orderedList).toEqual([6, 6, 6, 6, 6, 6, 6, 6, 6]);
  });

  it('All Zeros', () => {
    const arr = [0, 0, 0, 0, 0];
    const res = QuickSort(arr);
    expect(res.orderedList).toEqual([0, 0, 0, 0, 0]);
  });

  it('Unsorted Array', () => {
    const arr = [1, 3, 8, 6, 4, 3, 8, 0, 9, 10, 223, 4, 6, -3];
    const res = QuickSort(arr);
    expect(res.orderedList).toEqual([-3, 0, 1, 3, 3, 4, 4, 6, 6, 8, 8, 9, 10, 223]);
  });

  it('Reversed Array', () => {
    const arr = [14839, 8559, 3456, 1203, 803, 503, 200, 130, 50, 19, 2, 9, 0, -2, -34, -40];
    const res = QuickSort(arr);
    // eslint-disable-next-line max-len
    expect(res.orderedList).toEqual([-40, -34, -2, 0, 2, 9, 19, 50, 130, 200, 503, 803, 1203, 3456, 8559, 14839]);
  });

  it('Ordered Array', () => {
    const arr = [-3, 0, 1, 3, 3, 4, 4, 6, 6, 8, 8, 9, 10, 223];
    const res = QuickSort(arr);
    expect(res.orderedList).toEqual([-3, 0, 1, 3, 3, 4, 4, 6, 6, 8, 8, 9, 10, 223]);
  });

  it('Returns correct algInfo', () => {
    const arr = [1, 2];
    const res = QuickSort(arr);
    expect(res.info).toEqual({
      title: 'Quick Sort',
      worstTime: 'O(n^2)',
      bestTime: 'O(n * log(n))',
      avgTime: 'O(n * log(n))',
      space: 'O(log(n))',
      pseudoCode: `function QuickSort(list, lowerBound = 0, upperBound = list.length - 1,) {
  if (lowerBound >= upperBound) {
    return list;
  }
  const pivotIdx = Math.floor((lowerBound + upperBound) / 2);
  const index = partition(list, lowerBound, upperBound, pivotIdx);

  // Run recursively on the smallest sub-array to optimize space complexity
  const leftSubArrayIsSmaller = (index - 1) - lowerBound < upperBound - index;
  if (leftSubArrayIsSmaller) {
    QuickSort(list, lowerBound, index - 1, steps);
    QuickSort(list, index, upperBound, steps);
  } else {
    QuickSort(list, index, upperBound, steps);
    QuickSort(list, lowerBound, index - 1, steps);
  }
  return list;
}
      
function partition(list, left, right, pivotIdx) {
  while (left <= right) {
    while (list[left] < list[pivotIdx]) {
      left++;
    }

    while (list[pivotIdx] < list[right]) {
      right--;
    }

    if (left <= right) {
      swap(left, right, list);
      if (pivotIdx === left) {
        pivotIdx = right;
      } else if (pivotIdx === right) {
        pivotIdx = left;
      }
      left++;
      right--;
    }
  }
  return left;
}`,
    });
  });

  it('Returns some steps', () => {
    const arr = [20, 64, 23];
    const res = QuickSort(arr);
    expect(res.steps.length > 0).toBeTruthy();
  // Not testing all steps...
  });
});

describe('Merge Sort Test', () => {
  it('Empty Array', () => {
    const arr = [];
    const res = MergeSort(arr);
    expect(res.orderedList).toEqual([]);
  });

  it('Single Value', () => {
    const arr = [1];
    const res = MergeSort(arr);
    expect(res.orderedList).toEqual([1]);
  });

  it('All Same Value', () => {
    const arr = [6, 6, 6, 6, 6, 6, 6, 6, 6];
    const res = MergeSort(arr);
    expect(res.orderedList).toEqual([6, 6, 6, 6, 6, 6, 6, 6, 6]);
  });

  it('All Zeros', () => {
    const arr = [0, 0, 0, 0, 0];
    const res = MergeSort(arr);
    expect(res.orderedList).toEqual([0, 0, 0, 0, 0]);
  });

  it('Unsorted Array', () => {
    const arr = [1, 3, 8, 6, 4, 3, 8, 0, 9, 10, 223, 4, 6, -3];
    const res = MergeSort(arr);
    expect(res.orderedList).toEqual([-3, 0, 1, 3, 3, 4, 4, 6, 6, 8, 8, 9, 10, 223]);
  });

  it('Reversed Array', () => {
    const arr = [14839, 8559, 3456, 1203, 803, 503, 200, 130, 50, 19, 2, 9, 0, -2, -34, -40];
    const res = MergeSort(arr);
    // eslint-disable-next-line max-len
    expect(res.orderedList).toEqual([-40, -34, -2, 0, 2, 9, 19, 50, 130, 200, 503, 803, 1203, 3456, 8559, 14839]);
  });

  it('Ordered Array', () => {
    const arr = [-3, 0, 1, 3, 3, 4, 4, 6, 6, 8, 8, 9, 10, 223];
    const res = MergeSort(arr);
    expect(res.orderedList).toEqual([-3, 0, 1, 3, 3, 4, 4, 6, 6, 8, 8, 9, 10, 223]);
  });

  it('Returns correct algInfo', () => {
    const arr = [1, 2];
    const res = MergeSort(arr);
    expect(res.info).toEqual({
      title: 'Merge Sort',
      worstTime: 'O(n * log(n))',
      bestTime: 'O(n * log(n))',
      avgTime: 'O(n * log(n))',
      space: 'O(n)',
      pseudoCode: `function MergeSort(list, lo = 0, hi = list.length - 1) {
  if (lo >= hi) {
    return list;
  }
  const mid = Math.floor((lo + hi) / 2);
  MergeSort(list, lo, mid);
  MergeSort(list, mid + 1, hi);
  merge(list, lo, mid, hi);

  return list;
}

function merge(list, lo, mid, hi) {
  const sortedList = [];
  let i = lo;
  let j = mid + 1;
  while (i <= mid && j <= hi) {
    if (list[i] <= list[j]) {
      sortedList.push(list[i]);
      i++;
    } else {
      sortedList.push(list[j]);
      j++;
    }
  }
  while (i <= mid) {
    sortedList.push(list[i]);
    i++;
  }
  while (j <= hi) {
    sortedList.push(list[j]);
    j++;
  }
  for (let k = lo; k <= hi; k++) {
    list[k] = sortedList[k - lo];
  }
}`,
    });
  });

  it('Returns some steps', () => {
    const arr = [20, 64, 23];
    const res = MergeSort(arr);
    expect(res.steps.length > 0).toBeTruthy();
  // Not testing all steps...
  });
});
