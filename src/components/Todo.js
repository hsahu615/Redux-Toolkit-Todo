import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../reducer/todoSlice";

const Todo = () => {
  const todoList = useSelector((state) => state.todoList);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };
  return (
    <div>
      {todoList.map((todo) => (
        <>
          <p>{todo.content}</p>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </>
      ))}
    </div>
  );
};

export default Todo;
