import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../Feartures/Todo/TodoSlice";
function Todo({ todo }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <h1>{todo.activity}</h1>
      <p>{todo.description}</p>

      <div>
        <button>update</button>

        <button onClick={() => handleDelete(todo.id)}>delete</button>
      </div>
    </div>
  );
}

export default Todo;
