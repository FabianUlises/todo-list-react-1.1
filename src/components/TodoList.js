import React, { Component } from 'react';
import Todo from './Todo';
const TodoList = ({ todos, setTodos }) => {
    return (
        <ul>
            <Todo />
        </ul>
    );
};
export default TodoList;
