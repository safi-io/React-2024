import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);

  let countIncrease = function () {
    setCount(count + 1);
  };

  let countDecrease = function () {
    setCount(count = (count > 0 ? count - 1 : 0));
  };

  return (
    <>

      <button onClick={countIncrease}>Counter Increase: {count}</button>
      <br/><br/>
      <button onClick={countDecrease}>Counter Decrease: {count}</button>
    </>
  );
}
