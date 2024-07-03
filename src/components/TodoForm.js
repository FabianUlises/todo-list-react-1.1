import React, { Component, useState } from 'react';
const TodoForm = () => {
    // State
    const [input, setInput] = useState('');
    // Handler function for userinput state
    const handleInputChange = (e) => {
        // Updating input state
        setInput(e.target.value);
    };
    return (
        <form>
            <input type='text' placeholder='enter task' value={input} maxLength={60} required autoFocus onChange={handleInputChange} />
        </form>
    );
};
export default TodoForm;