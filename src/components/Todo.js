import React from 'react'

const Todo = ({ todo,toggleComplete, toggleEdit }) => (
    <li key={todo.id}>
        <p onClick={() => toggleComplete(todo.id)}>{todo.task}</p>
        <span onClick={() => toggleEdit(todo.id)}>✏️</span>
        <span>🗑️</span>
    </li>
  );

export default Todo;