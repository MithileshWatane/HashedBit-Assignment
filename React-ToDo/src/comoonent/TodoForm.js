// src/TodoForm.js
import React, { useState } from "react";
import "./TodoForm.css";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <div className="container">
      <h2>ADD YOUR TODO ... </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add Todo..."
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default TodoForm;
