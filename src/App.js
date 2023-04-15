import React from "react";
import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  const [factor, setFactor] = useState(1);

  const handleIncrement = () => {
    setCount(count + factor);
  };

  const handleDecrement = () => {
    setCount(count - factor);
  };

  const handleUpdateFactor = (inputFactor) => {
    if (inputFactor) {
      setFactor(inputFactor);
    } else {
      setFactor(1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  let numberColor;

  if (count > 0) {
    numberColor = "green";
  } else if (count < 0) {
    numberColor = "red";
  } else {
    numberColor = "black";
  }

  return (
    <div className="Counter">
      <h1 style={{ color: numberColor }} className="digit">
        {count}
      </h1>
      <div className="change-values">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div>
        Increment or Decrement By:
        <span>
          {"    "}
          <input
            type="number"
            value={factor}
            onChange={(e) => handleUpdateFactor(e.target.valueAsNumber)}
          />
        </span>
      </div>
    </div>
  );
}

export default Counter;
