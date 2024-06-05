// src/Todo.js
import React from "react";
import "./Todo.css";

function Todo({ todo, index, removeTodo }) {
  return (
    <div className="container">
      <h3>YOUR TODO LIST</h3>
      <div className="todo">
        {todo.text}
        <button onClick={() => removeTodo(index)}>&times;</button>
      </div>
    </div>
  );
}

export default Todo;
