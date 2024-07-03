import React, { Component, useState } from 'react';
const EditTodoForm = ({ todo, updateTodo }) => {
    // State
    const [input, setInput] = useState(todo.task ? todo.task : '');
    // Handler function for userinput state
    const handleInputChange = (e) => {
        // Updating input state
        setInput(e.target.value);
    };
    // Handler function for form submit
    const handleSubmit = (e) => {
        // Prevent browser default refresh
        e.preventDefault();
        // Updating todo state with new user input
        updateTodo(todo.id, input);
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
export default EditTodoForm;