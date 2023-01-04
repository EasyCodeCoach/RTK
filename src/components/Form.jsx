import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Feartures/Todo/TodoSlice";
function Form() {
  const dispatch = useDispatch();

  const [activity, setActivity] = useState("");
  const [description, setDescription] = useState("");

  // handle submit event
  const handleSubmit = (e) => {
    // prevent default reloading behaviour when submit button is pressed
    e.preventDefault();

    const payload = {
      id: Math.random() * 1000,
      activity,
      description,
    };

    dispatch(addTodo(payload));
  };
  return (
    <div style={{ marginTop: "15px" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Form;
