import { BubbleSort, InsertionSort } from './sorting-algorithms';

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
    });
  });

  it('Returns some steps', () => {
    const arr = [3, 1, 4];
    const res = BubbleSort(arr);
    expect(res.steps.length > 0).toBeTruthy();
    expect(res.steps[0]).toEqual({
      action: 'move cursor',
      pos: arr.length - 1,
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
    });
  });

  it('Returns some steps', () => {
    const arr = [3, 1, 4];
    const res = InsertionSort(arr);
    expect(res.steps.length > 0).toBeTruthy();
    expect(res.steps[0]).toEqual({
      action: 'move cursor',
      pos: 0,
    });
    expect(res.steps[1]).toEqual({
      action: 'move cursor',
      pos: 1,
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
      action: 'move cursor',
      pos: 2,
    });
    expect(res.steps[5]).toEqual({
      action: 'compare',
      i: 1,
      j: 2,
    });
    // Not testing all steps...
  });
});
