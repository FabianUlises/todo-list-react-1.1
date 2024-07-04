import React, { Component, useEffect, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import ListToggle from './components/ListToggle';

function App() {
  // Function to get localstorage todos
  const getLocalStorage = () => {
    // Setting items to todos if any if not setting to empty array
    let items = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
    // Returning items
    return items;
  };
  // State
  const [todos, setTodos] = useState(getLocalStorage());
  // useEffect
  useEffect(() => {
    // Adding todos to local storage
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="App">
      <TodoForm setTodos={setTodos} />
      <ListToggle />
      { todos.length ? <TodoList todos={todos} setTodos={setTodos}/> : 'No tasks yet' }
    </div>
  );
};
export default App;