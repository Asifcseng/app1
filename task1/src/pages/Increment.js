import React, { useState } from "react";

function Increment({ value, onIncrement }) {
  function handleIncrement() {
    onIncrement(value + 1);
  }
  return (
    <div className="counter-div">
      <button onClick={handleIncrement} className="counter-btn">
        +
      </button>
    </div>
  );
}

export default Increment;
