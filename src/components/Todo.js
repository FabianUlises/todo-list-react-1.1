import React from 'react'

const Todo = ({ todo,toggleComplete }) => (
    <li key={todo.id}>
        <p onClick={() => toggleComplete(todo.id)}>{todo.task}</p>
        <span>✏️</span>
        <span>🗑️</span>
    </li>
  );

export default Todo;