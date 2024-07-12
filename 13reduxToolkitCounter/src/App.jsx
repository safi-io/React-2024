import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./features/counter/counterSlice";

export default function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  let handleIncrementClick = ()=> {
    dispatch(increment());
  }

  let handleDecrementClick = ()=> {
    dispatch(decrement());
  }

  let handleIncrementAmount =(val)=> {
    dispatch(incrementByAmount(val));
  }

  return (
    <>  
      <h1>Hi, I am from App componenet and the value is:- {count}</h1>
      <button className="btn" onClick={handleIncrementClick}>Increment</button>
      <button className="btn" onClick={handleDecrementClick}>Decrement</button>
      <button className="btn" onClick={()=>handleIncrementAmount(10)}>Increment by Amount</button>
    </>
  );
}
