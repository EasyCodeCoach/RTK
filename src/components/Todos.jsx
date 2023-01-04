import React from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";
function Todos() {
  const { todos } = useSelector((state) => state.todo);
  return (
    <div>
      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </div>
  );
}

export default Todos;
