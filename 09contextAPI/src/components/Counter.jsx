import React, { useContext } from "react";
import { CounterContext } from "../context/Counter";

export default function Counter() {
  const data = useContext(CounterContext);

  const handleIncrement =()=> {
    data.setCount( (data.count+1) )
  }

  const handleDecrement =()=> {
    data.setCount( (data.count-1) )
  }

  return (
    <>
      <div style={{"margin" : "20px 0"}}>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </>
  );
}
