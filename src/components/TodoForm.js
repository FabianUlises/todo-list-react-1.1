import React, { Component, useState } from 'react';
const TodoForm = ({ setTodos }) => {
    // State
    const [input, setInput] = useState('');
    // Handler function for userinput state
    const handleInputChange = (e) => {
        // Updating input state
        setInput(e.target.value);
    };
    // Handler function to update todos state using props
    const addTodo = (todo) => {
        // Not accepting empty string or spaces
        if(todo === '' || /^\s*$/.test(todo)) return;
        // Creating id for todo using js date function
        const todoId = Date.now();
        // Updating state
        setTodos((currentTodos) => 
            [...currentTodos, {
                id: todoId,
                task: todo,
                completed: false,
                isEditing: false
            }]
        );
    };
    // Handler function for form submit
    const handleSubmit = (e) => {
        // Prevent browser default refresh
        e.preventDefault();
        // Adding new task to todo state using user input
        addTodo(input);
        // Resetting input to empty string
        setInput('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='enter task' value={input} maxLength={60} required autoFocus onChange={handleInputChange} />
            <button type='submit' aria-label='submit'>submit</button>
        </form>
    );
};
export default TodoForm;