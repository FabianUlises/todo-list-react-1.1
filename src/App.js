import React, { Component, useEffect, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';

function App() {
  // State
  const [todos, setTodos] = useState([]);
  // useEffect
  useEffect(() => {
    // Adding todos to local storage
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="App">
      <TodoForm setTodos={setTodos} />
    </div>
  );
};
export default App;