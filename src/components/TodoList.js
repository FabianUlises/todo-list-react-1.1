import React, { Component } from 'react';
import Todo from './Todo';
const TodoList = ({ todos, setTodos }) => {
    // Function to map throught and display todos in state
    const displayTodos = todos.map((todo) => (<Todo todo={todo} />));
    return (
        <ul>
            { displayTodos }
        </ul>
    );
};
export default TodoList;
