import React from 'react'

const Todo = ({ todo,toggleComplete, toggleEdit, deleteTodo }) => (
    <li key={todo.id} className='todo-item'>
        <p onClick={() => toggleComplete(todo.id)} className={`${todo.completed ? 'completed' : ''}`}>{todo.task}</p>
        <span onClick={() => toggleEdit(todo.id)}>✏️</span>
        <span onClick={() => deleteTodo(todo.id)}>🗑️</span>
    </li>
  );

export default Todo;