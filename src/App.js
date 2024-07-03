import React, { Component, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';

function App() {
  // State
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <TodoForm setTodos={setTodos} />
    </div>
  );
};
export default App;