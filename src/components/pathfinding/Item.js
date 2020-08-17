import React from 'react';
import { Icon } from 'semantic-ui-react';
import './Item.scss';

function getItemIcon(type, availability) {
  switch (type) {
    case 'player':
      return (
        <Icon
          className={`street view ${availability ? 'inverted blue' : 'inverted grey'}`}
          style={{
            fontSize: '35px', position: 'relative', top: '0px', left: '-1px',
          }}
        />
      );
    case 'wall':
      return (
        <Icon
          className={`square full ${availability ? 'grey' : 'inverted grey'}`}
          style={{
            fontSize: '30px', position: 'relative', top: '-1px', left: '0px',
          }}
        />
      );
    case 'treasure':
      return (
        <Icon
          className={`home ${availability ? 'inverted green' : 'inverted grey'}`}
          style={{
            fontSize: '35px', position: 'relative', top: '0px', left: '-1px',
          }}
        />
      );
    case 'empty':
      return (
        <Icon
          className="eraser inverted red"
          style={{
            fontSize: '35px', position: 'relative', top: '0px', left: '-1px',
          }}
        />
      );
    default: return null;
  }
}
function Item({
  type, selectedItem, setSelectedItem, availability,
}) {
  return (
    <span
      className={`item ${selectedItem === type ? 'selected' : ''}`}
      role="button"
      onClick={() => {
        setSelectedItem(type);
      }}
      tabIndex={0}
      onKeyPress={() => setSelectedItem(type)}
    >
      {getItemIcon(type, availability)}
      {type === 'empty' ? 'Eraser' : `${type} x${availability}`}
    </span>
  );
}

export default Item;
