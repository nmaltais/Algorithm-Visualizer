import React from 'react';
import { Button } from 'semantic-ui-react';
import Item from './Item';

export const ItemTypes = {
  PLAYER: 'player',
  WALL: 'wall',
  TREASURE: 'treasure',
  ERASER: 'empty',
};

function ToolMenu({
  selectedItem, setSelectedItem, inventory, find, pause, reset, animationState,
}) {
  return (
    <div id="pathfinding_items">
      <Item type={ItemTypes.PLAYER} selectedItem={selectedItem} setSelectedItem={setSelectedItem} availability={inventory.player} />
      <Item type={ItemTypes.WALL} selectedItem={selectedItem} setSelectedItem={setSelectedItem} availability={inventory.wall} />
      <Item type={ItemTypes.TREASURE} selectedItem={selectedItem} setSelectedItem={setSelectedItem} availability={inventory.treasure} />
      <Item type={ItemTypes.ERASER} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
      {animationState === 'playing'
        ? <Button id="pauseBtn" icon="pause" content="Pause" onClick={() => pause()} />
        : (
          <Button
            id="playBtn"
            disabled={animationState === 'done' || inventory.player + inventory.treasure > 0}
            icon="play"
            content="Play"
            onClick={() => find()}
          />
        )}
      <Button
        id="resetBtn"
        icon="repeat"
        content="Reset"
        onClick={() => reset()}
      />
    </div>
  );
}

export default ToolMenu;
