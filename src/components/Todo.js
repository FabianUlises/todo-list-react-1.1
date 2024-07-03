import React from 'react'

const Todo = ({ todo,toggleComplete, toggleEdit, deleteTodo }) => (
    <li key={todo.id}>
        <p onClick={() => toggleComplete(todo.id)}>{todo.task}</p>
        <span onClick={() => toggleEdit(todo.id)}>✏️</span>
        <span onClick={() => deleteTodo(todo.id)}>🗑️</span>
    </li>
  );

export default Todo;