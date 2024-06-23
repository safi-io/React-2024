import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todo() {
  let [input, setInput] = useState("");

  let [tasks, setTasks] = useState([]);

  let updateInput = (e) => {
    setInput(e.target.value);
  };

  let updateButton = () => {
    if (input === "") {
      alert("Write Something");
      return;
    }
    setTasks([...tasks, { task: input, id: uuidv4() , isDone: false}]);
    setInput("");
  };

  let deleteFunc = (id) => {
    setTasks(tasks.filter((task) => task.id != id));
  };

  let upperCase = () => {
    setTasks(tasks.map((task) => ({
        ...task,
        task: task.task.toUpperCase()}
    ) ));
  }

  let updateFunc = (id)=> {
    setTasks(tasks.map((task) => {
      if(task.id == id) {
        return {
          ...task,
          isDone : !task.isDone
        }
      }
      else {
        return task;
      }
    }))
  }



  return (
    <>
      <input
        type="text"
        onChange={updateInput}
        placeholder="Add a Task"
        value={input}
      />

      <button onClick={updateButton}>Click Me!</button>
      <ul>
        {tasks.map((todo) => (
          <li key={todo.id} style={{ textDecoration: todo.isDone ? "line-through" : ""}}>
            <span>{todo.task}</span>
            <button
              onClick={() => {
                deleteFunc(todo.id);
              }}
            >
              Delete
            </button>

            <button
              onClick={() => {
                updateFunc(todo.id);
              }}
            >
              Update
            </button>


          </li>
        ))}
      </ul>
      <button onClick={upperCase}>Upper Case Everything</button>
    </>
  );
}
