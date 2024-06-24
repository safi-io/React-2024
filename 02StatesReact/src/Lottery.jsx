import { useState } from "react";
import { randomNum, sumRandomNum } from "./helperLottery.js";

export default function Lottery() {
  let [arr, setArr] = useState(randomNum(3));
  let isEqual = sumRandomNum(arr) === 10;

  let genNew = () => {
    setArr(randomNum(3));
  };


  return (
    <>
     
      <span>{arr[0]}</span>
      <span>{arr[1]}</span>
      <span>{arr[2]}</span>
      <h3>{isEqual && "Congo"}</h3>
      <button onClick={genNew}>Replay</button>
    </>
  );
}
