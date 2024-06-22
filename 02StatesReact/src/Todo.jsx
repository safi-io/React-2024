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
    setTasks([...tasks, { task: input, id: uuidv4() }]);
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
          <li key={todo.id}>
            <span>{todo.task}</span>
            <button
              onClick={() => {
                deleteFunc(todo.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <button onClick={upperCase}>Upper Case Everything</button>
    </>
  );
}
