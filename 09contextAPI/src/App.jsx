import React, { useContext } from 'react'
import Counter from './components/Counter';
import { CounterContext } from './context/Counter';

export default function App() {

  const data = useContext(CounterContext);
  
  return (
    <>
       <h1>Count is currently {data.count}</h1>
       <Counter/>
       <Counter/>
       <Counter/>
       <Counter/>
    </>
  );
}