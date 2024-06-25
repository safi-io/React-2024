import { useState } from "react";
import { randomNum, sumRandomNum } from "./helperLottery.js";

export default function Lottery() {
  let [arr, setArr] = useState(randomNum(3));
  let [target, setTarget] = useState(0);
  let isEqual = sumRandomNum(arr) === target;

  let genNew = () => {
    setArr(randomNum(3));
  };

  let updateTarget = (e) => {
    setTarget(Number(e.target.value));
  };

  return (
    <>
      <h1>Put Target</h1>
      <input type="text" onChange={updateTarget} /> <br />
      <h1>Lottery Numbers</h1>
      <span>{arr[0]}</span>
      <span>{arr[1]}</span>
      <span>{arr[2]}</span>
      <h3>{isEqual && "Congratulations, you won"}</h3>
      <button onClick={genNew}>Replay</button>
    </>
  );
}
