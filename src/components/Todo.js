import React from 'react'

const Todo = ({ todo }) => (
    <li key={todo.id}>{todo.task}<span>✏️</span><span>🗑️</span></li>
  );

export default Todo;