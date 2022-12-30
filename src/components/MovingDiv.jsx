
import React, { useState, useRef } from 'react';
import LoginButton from "./Enedis1";

function MovingDiv() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const divRef = useRef(null);

  const handleMouseDown = (event) => {
    const { clientX, clientY } = event;
    const { left, top } = divRef.current.getBoundingClientRect();
    setPosition({
      x: clientX - left,
      y: clientY - top,
    });

    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX - left,
        y: event.clientY - top,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    window.addEventListener('mouseup', () => {
      window.removeEventListener('mousemove', handleMouseMove);
    });
  };

  return (
    <div className='enedis'
      ref={divRef}
      style={{
        position: 'absolute',
        left: position.x +1000,
        top: position.y +550,
      }}
      onMouseDown={handleMouseDown}
    >
      <h3>Move me</h3>  <LoginButton />
    </div>
  );
}

export default MovingDiv;

