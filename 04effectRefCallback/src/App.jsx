// Not focusing on Styling, Just enhancing up my logics by building projects.

import { useState, useCallback, useEffect, useRef } from "react";

export default function App() {
  const [length, setLength] = useState(5);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("Password");

  const passRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM";

    numAllowed ? (str += "0123456789") : str;
    charAllowed ? (str += "!@#$%^&*()_+~`") : str;

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  const copyPassClip = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <h1 className="text-white text-5xl text-center mt-5">
        Password Generator
      </h1>

      <input
        type="text"
        value={password}
        readOnly
        className="my-5 p-1"
        ref={passRef}
      />

      <button className="bg-white m-5 p-1" onClick={copyPassClip}>
        COPY
      </button>

      <br />

      <input
        type="range"
        id="lenRange"
        min={4}
        max={15}
        value={length}
        onChange={(e) => {
          setLength(e.target.value);
        }}
      />
      <label htmlFor="lenRange" className="text-white">
        Length({length})
      </label>

      <br />

      <input
        type="checkbox"
        onChange={() => {
          setNumAllowed((prev) => !prev);
        }}
        id="numCheckbox"
      />

      <label htmlFor="numCheckbox" className="text-white">
        Numbers
      </label>

      <br />

      <input
        type="checkbox"
        onChange={() => {
          setCharAllowed((prev) => !prev);
        }}
        id="charCheckbox"
      />

      <label htmlFor="charCheckbox" className="text-white">
        Characters
      </label>

      <br />

      <button className="bg-white my-5" onClick={passwordGenerator}>
        Refresh
      </button>
    </>
  );
}
