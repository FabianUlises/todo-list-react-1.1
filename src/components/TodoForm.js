import React, { Component, useState } from 'react';
const TodoForm = () => {
    // State
    const [input, setInput] = useState('');
    return (
        <form>
            <input type='text' placeholder='enter task' value={input} maxLength={60} required autoFocus />
        </form>
    );
};
export default TodoForm;