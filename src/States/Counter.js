import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  function add() {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // by using callback function it helps to determine
    // the new value using old or previous value
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }

  function minus() {
    setCount((prev) => prev - 1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={add}>Increment</button>
      <button onClick={minus}>Decrement</button>
    </div>
  );
};

export default Counter;
