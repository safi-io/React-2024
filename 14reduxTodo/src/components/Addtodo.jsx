import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function Addtodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if(input === "") {
      alert("Write Something in the below field.")
      return;
    }
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <>
      <form onSubmit={addTodoHandler}>
        <input
          type="text"
          placeholder="Enter a Todo:"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Push Todo</button>
      </form>
    </>
  );
}
