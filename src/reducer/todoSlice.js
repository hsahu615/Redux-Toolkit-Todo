import { combineSlices, createSlice } from "@reduxjs/toolkit";

const todoState = {
  todoList: [
    {
      id: 1,
      content: "Hit the gym",
    },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState: todoState,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push({
        id: Date.now(),
        content: action.payload,
      });
    },
    removeTodo: (state, action) => {
      console.log(action);
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
    },
  },
});

export const { addTodo } = todoSlice.actions;
export const { removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
