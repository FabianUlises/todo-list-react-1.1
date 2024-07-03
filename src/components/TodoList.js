import React, { Component } from 'react';
import Todo from './Todo';
const TodoList = ({ todos, setTodos }) => {
    // Function to toggle complete value on todo using todoid
    const toggleComplete = (todoId) => {
        // Updating state with new value using todoid
        setTodos((currentTodos) => 
            currentTodos.map((todo) => todo.id === todoId ? {...todo, completed: !todo.completed} : todo)
        );
    };
    // Function to toggle isEdit value on todo using todoId
    const toggleEdit = (todoId) => {
        // Updating state with new value using todoid
        setTodos((currentTodos) => 
            currentTodos.map((todo) => 
                todo.id === todoId ? 
                { ...todo, isEditing: !todo.isEditing } :
                todo
            )
        );
    };
    // Function to delete todo from todo state using todoid
    const deleteTodo = (todoId) => {
        // Using setTodos to delete selected todo and update state
        setTodos((currentTodos) => {
            return currentTodos.filter((todo) => todo.id !== todoId);
        });
    };
    // Function to map throught and display todos in state
    const displayTodos = todos.map((todo) => (<Todo todo={todo} toggleComplete={toggleComplete} toggleEdit={toggleEdit} deleteTodo={deleteTodo} />));
    return (
        <ul>
            { todos.length ? displayTodos : null }
        </ul>
    );
};
export default TodoList;
