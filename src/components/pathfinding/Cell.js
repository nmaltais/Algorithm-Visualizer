/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Icon } from 'semantic-ui-react';
import './Cell.scss';


function Cell({
  type, visiting, visited, pos, paint, onPath,
}) {
  return (
    <div
      role="button"
      className={`${type} cell ${visited ? 'visited' : ''} ${visiting ? 'visiting' : ''} ${onPath ? 'path' : ''}`}
      onMouseDown={() => paint(pos, type)}
      onMouseEnter={() => paint(pos, type)}
      tabIndex={0}
      onKeyPress={() => paint(pos, type)}
      style={{ overflow: 'show' }}
    >
      {type === 'player'
        ? (
          <Icon
            className="street view inverted blue"
            style={{
              fontSize: '35px', position: 'relative', top: '0px', left: '-1px',
            }}
          />
        )
        : ''}
      {type === 'treasure'
        ? (
          <Icon
            className="home inverted green"
            style={{
              fontSize: '40px', position: 'relative', top: '-5px', left: '-5px',
            }}
          />
        )
        : ''}

    </div>
  );
}

export default Cell;
