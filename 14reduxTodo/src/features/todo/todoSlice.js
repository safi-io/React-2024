import { createSlice, nanoid } from "@reduxjs/toolkit";

let initialState = {
  todos: [],
};

const local_todos = JSON.parse(localStorage.getItem("todoHistory"));
if(local_todos!==null) {
  initialState = local_todos;
}

const setDataLocal = (state) => {
  localStorage.setItem("todoHistory", JSON.stringify(state));
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
      setDataLocal(state);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      setDataLocal(state);
    },
    editTodo: (state, action) => {
      const [provided_id, provided_text] = action.payload;
      state.todos.map((todo) => {
        if (todo.id === provided_id) {
          todo.text = provided_text;
        }
      });
      setDataLocal(state);
    },
  },
});

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
