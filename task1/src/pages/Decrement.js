import React from "react";

function Decrement({ value, onDecrement }) {
  function handleDecrement() {
    onDecrement(value - 1);
  }
  return (
    <div className="counter-div">
      <button className="counter-btn" onClick={handleDecrement}>
        -
      </button>
    </div>
  );
}

export default Decrement;
