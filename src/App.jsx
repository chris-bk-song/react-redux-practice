import React from 'react';
import './App.css';
import TodoForm from './TodoForm';
import TaskList from './TaskList';

function App() {
  return (
    <div className="App">
      <TodoForm />
      <TaskList />
    </div>
  );
} 

export default App;