import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, editTodo } from "../features/todo/todoSlice";

export default function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const editTodoHandler = (id)=> {
    let new_message = prompt("Enter Updated Text..")
    if(new_message!== null && new_message!== "") {
      dispatch(editTodo([id, new_message]))
    }else {
      alert("You must write Something..")
      return;
    }
  }

  return (
    <>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
          <button onClick={() => editTodoHandler(todo.id)}>Edit Todo</button>
        </li>
      ))}
    </>
  );
}
