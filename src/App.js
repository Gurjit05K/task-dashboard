import React from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Task Management Dashboard</h1>
      </header>
      <AddTask />
      <TaskList />
    </div>
  );
};

export default App;

