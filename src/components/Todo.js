import React from 'react'

const Todo = ({ todo }) => (
    <li key={todo.id}>
        <p>{todo.task}</p>
        <span>✏️</span>
        <span>🗑️</span>
    </li>
  );

export default Todo;