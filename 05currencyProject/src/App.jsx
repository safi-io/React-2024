import { useState } from "react";
import { InputBox } from "../components";
import useCurrencyInfo from "../hooks/useCurrencyInfo";

export default function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("pkr");
  const [to, setTo] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat">
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">

              <InputBox
                label="From"
                amount={amount}
                currenyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount)=>setAmount(amount)}
              />
            </div>


            <div className="relative w-full h-0.5"></div>
            <div className="w-full mt-1 mb-4">

              <InputBox label="To"
              amount={convertedAmount}
              currenyOptions={options}
              onCurrencyChange={(currency)=>setTo(currency)}
              selectCurrency={from}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
