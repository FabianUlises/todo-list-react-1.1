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
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [status, setStatus] = useState('all');
  // useEffect
  useEffect(() => {
    // Adding todos to local storage
    localStorage.setItem('todos', JSON.stringify(todos));
    // Setting filteredtodos depending on user input status
    filterHandler();
  }, [todos, status]);
  // Function to handle filter change on listtoggle component
  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    };
  };
  return (
    <div className="App">
      <TodoForm setTodos={setTodos} />
      <ListToggle setStatus={setStatus} />
      { todos.length ? <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/> : 'No tasks yet' }
    </div>
  );
};
export default App;