import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

export default function App() {
  const [inputField, setInputField] = useState("");
  const [resultField, setResultField] = useState("Empty");
  let [historyItems, setHistoryItems] = useState([]);

  const handleCalcClick = () => {
    // Checking if the input is empty or not
    if (inputField === "") {
      alert("Enter Something");
      return;
    }

    let expression = inputField.trim();
    if (expression === "0/0") {
      alert("Cant Divide 0 by 0");
      return;
    }
    try {
      // Trimming the whitespaces
      setResultField(eval(expression));
      let value = `${expression} = ${eval(expression)}`
      setHistoryItems([...historyItems, value])
    } catch (error) {
      alert(error);
    }
  };

  const handleResetClick = () => {
    setInputField("");
    setResultField("Empty");
    setHistoryItems([]);
  };
  useEffect(() => {
    const history = JSON.parse(localStorage.getItem("history"));
    if (history && history.length > 0) {
      setHistoryItems(history);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(historyItems));
  }, [historyItems]);

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className=" left-side flex justify-center items-center flex-col">
          {/* Information Card */}
          <Card
            sx={{
              maxWidth: 500,
              backgroundColor: "black",
              color: "white",
              padding: 2,
              margin: 2,
            }}
          >
            <span>
              Rules:-
              <ul>
                <li>1. You can use any basic opearator like +, -, *, /.</li>
                <li>
                  2. You can use any Trignomerty Function as sin(x) or cos(x).
                </li>
                <li>3. Power can be used x**y.</li>
                <li>4. Parenthesses can also be used.</li>
                <li>5. History is also Maintained on the Right.</li>
              </ul>
            </span>
          </Card>

          <div className="flex flex-col gap-5 mt-5 ml-5 items-start">
            {/* Expression Input Field */}
            <TextField
              id="outlined-basic"
              label="Input-Expression"
              variant="outlined"
              onChange={(e) => setInputField(e.target.value)}
              value={inputField}
            />
            {/* Main Button */}
            <div className="flex gap-2">
              <Button variant="contained" onClick={handleCalcClick}>
                Calcualte
              </Button>
              {/* Reset Button */}
              <Button variant="outlined" onClick={handleResetClick}>
                Reset
              </Button>
            </div>

            {/* Result Output Field */}
            <TextField
              id="filled-basic"
              variant="filled"
              disabled
              value={resultField}
            />
          </div>
        </div>

        <div className="right-side">
          <h2 className="bg-black text-white">Results</h2>

          {historyItems.map((hist, index) => (
          <h1 key={index}>{hist}</h1>
        ))}

        </div>
      </div>
    </>
  );
}
