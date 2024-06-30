// The only purpose of this Project is to learn how to Handle API's in React and I am not focusing on styling and Component Reuseability, as I am learning Concepts right now!

import { useState } from "react";
import useCurrencyInfo from "../hooks/useCurrencyInfo";

export default function App() {
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("pkr");
  const [fromAmount, setFromAmount] = useState(0);
  const [toAmount, setToAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(fromCurrency)
  const keys = Object.keys(useCurrencyInfo(fromCurrency));



  const converter = ()=> {
    let value = Number(fromAmount * currencyInfo[toCurrency]);
    setToAmount(value);
  }

  return (
    <>
      <h1>FROM</h1>
      <input
        type="text"
        className="bg-black text-white caret-white"
        value={fromAmount}
        onChange={(e) => setFromAmount(Number(e.target.value))}
      />
      <label htmlFor="fromCurrency">Choose currency:</label>
      <select name="fromCurrency" id="fromCurrency" onChange={(e)=>(setFromCurrency(e.target.value))} value={fromCurrency}>

        {keys.map((currencyVal) => (
          <option key={currencyVal} value={currencyVal}>
            {currencyVal}
          </option>
        ))}
      </select>

      {/* TO CASE */}

      <h1 className="mt-5">TO</h1>
      <input
        type="text"
        className="bg-black text-white caret-white"
        value={toAmount}
        onChange={(e) => setToAmount(e.target.value)}
      />
      <label htmlFor="toCurrency">Choose currency:</label>

      <select name="toCurrency" id="toCurrency" onChange={(e)=>(setToCurrency(e.target.value))} value={toCurrency}>
        {keys.map((currencyVal) => (
          <option key={currencyVal} value={currencyVal}>
            {currencyVal}
          </option>
        ))}
      </select>

      <button className="bg-black text-white" onClick={converter}>
        Get Value
      </button>
    </>
  );
}
