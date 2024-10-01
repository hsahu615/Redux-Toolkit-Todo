import React, { useState } from "react";
import { addTodo } from "../reducer/todoSlice";
import { useDispatch } from "react-redux";

const AddTodo = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = () => {
    dispatch(addTodo(name));
    setName("");
  };

  return (
    <div>
      AddTodo
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => addTodoHandler()}>Add ToDo</button>
    </div>
  );
};

export default AddTodo;
