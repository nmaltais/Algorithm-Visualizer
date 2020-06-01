import React, { useRef } from 'react';

const Bar = React.forwardRef((props, ref) => {
  const { num, height } = props;
  const ref2 = useRef(null);

  return (
    <div
      ref={ref}
      className="barContainer"
      style={{ width: `${height}vw`, maxWidth: '50px' }}
    >
      <div className="cursor1">cur 1</div>
      <div className="cursor2">cur 2</div>
      <div className="cursor3">cur 3</div>
      <div className="barValue">{num}</div>
      <div
        ref={ref2}
        style={{ height: `${num}vh` }}
        className="bar"
      />
    </div>
  );
});
export default Bar;
