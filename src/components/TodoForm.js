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
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='enter task' value={input} maxLength={60} required autoFocus onChange={handleInputChange} />
        </form>
    );
};
export default TodoForm;