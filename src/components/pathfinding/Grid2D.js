/* eslint-disable no-plusplus */
import React from 'react';
import Cell from './Cell';

function updatedGrid(grid, pos, newCell) {
  const gridCopy = [...grid];
  gridCopy[pos.y][pos.x] = { ...gridCopy[pos.y][pos.x], ...newCell };
  return gridCopy;
}

function Grid2D({
  width, selectedItem, inventory, setGrid, setInventory, setPlayerPos, setGoalPos, grid,
}) {
  const availability = inventory[selectedItem]; // Number of available items of the selected type

  function paint(pos, oldType) {
    const newType = selectedItem;
    if (window.event.which === 1 && availability > 0) {
      if (newType === 'empty' && oldType !== 'empty') { // Erasing something
        setGrid(updatedGrid(grid, pos, { type: newType }));
        setInventory((prevState) => ({ ...prevState, [oldType]: prevState[oldType] + 1 }));
      } else if (newType !== 'empty' && newType !== oldType) { // Painting something
        setGrid(updatedGrid(grid, pos, { type: newType }));
        setInventory((prevState) => ({ ...prevState, [newType]: availability - 1, [oldType]: prevState[oldType] + 1 }));
        if (newType === 'player') {
          setPlayerPos(pos);
        } else if (newType === 'treasure') {
          setGoalPos(pos);
        }
      }
    }
  }

  return (
    <div id="GridContainer" style={{ width: `${width * 40 + 10}px` }}>
      {grid.map((row, i) => (
        <div key={i} style={{ marginBottom: '-4px' }}>
          {row.map((cell) => (
            <Cell
              key={JSON.stringify(cell.pos)}
              type={cell.type}
              visited={cell.visited}
              visiting={cell.visiting}
              onPath={cell.onPath}
              pos={cell.pos}
              paint={paint}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Grid2D;
