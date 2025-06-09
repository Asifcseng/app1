import "@/styles/globals.css";
import Increment from "./Increment";
import Decrement from "./Decrement";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  let val;
  if (count < 0) {
    val = 0;
  } else {
    val = count;
  }
  return (
    <>
      <div className="counter-app">
        <h2 className="heading">Assignment-2 Counter Application</h2>
        <div className="counter-body">
          <Increment value={count} onIncrement={setCount} />
          <h3 className="counter">{val}</h3>
          <Decrement value={count} onDecrement={setCount} />
        </div>
      </div>
    </>
  );
}
