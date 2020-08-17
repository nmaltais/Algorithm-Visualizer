
function BFS(start, grid, goal) {
  const visits = [];
  const path = [];
  const visited = Array.from(Array(grid.length), () => Array(grid[0].length)); // Initialize empty array
  const prevCells = Array.from(Array(grid.length), () => Array(grid[0].length)); // Initialize empty array

  const queue = [{ pos: start, prev: { y: null, x: null } }];
  while (queue.length > 0) {
    const { pos, prev } = queue.shift(); // Dequeues first element of array
    const { x, y } = pos;

    if (y < 0 || x < 0 || y >= grid.length || x >= grid[0].length || visited[y][x] || grid[y][x].type === 'wall') {
      // eslint-disable-next-line no-continue
      continue;
    }


    // eslint-disable-next-line no-param-reassign
    visited[y][x] = true;
    prevCells[y][x] = { y: prev.y, x: prev.x };
    visits.push({ y, x });

    if (y === goal.y && x === goal.x) {
      let i = y;
      let j = x;
      path.push({ y, x });
      while (i !== start.y || j !== start.x) {
        path.push({ y: i, x: j });
        const oldI = i;
        i = prevCells[i][j].y;
        j = prevCells[oldI][j].x;
      }


      console.log(`found at y:${y}, x:${x}`);
      return { visits, path };
    }

    queue.push({ pos: { y, x: x + 1 }, prev: { y, x } }); // go right
    queue.push({ pos: { y, x: x - 1 }, prev: { y, x } }); // go left
    queue.push({ pos: { y: y + 1, x }, prev: { y, x } }); // go down
    queue.push({ pos: { y: y - 1, x }, prev: { y, x } }); // go up
  }
  return { visits, path }; // In case no path is found
}

export default BFS;
