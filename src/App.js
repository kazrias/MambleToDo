import React, { useState,useEffect } from 'react';
import './fonts/fonts.css';
import './App.css';
import InputForm from './components/InputForm';
import Task from './components/Task';


function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = (task) => {
    const newTask = {
      id: Date.now(),
      task: task,
      completed: false,
    }
    setTasks([newTask, ...tasks])
  }

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }
  const toggleTask = (id) => {
    setTasks([...tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : { ...task })])
  }
  useEffect(() => {
    const localData = localStorage.getItem("TODO_APP");
    if (localData !== null) setTasks(JSON.parse(localData));
  }, []);
  useEffect(() => {
    localStorage.setItem('TODO_APP', JSON.stringify(tasks));
}, [tasks]);
  return (
    <div className="App">
      <InputForm create={createTask} />
      {
        tasks.length !== 0 ?
          tasks.map(task =>
            <Task
              toggle={toggleTask}
              task={task}
              remove={removeTask}
              key={task.id}
            />
          ) :
          <div className='start'>
            Your life is a blank page. You Write on it.
            <span>So start by adding your tasks here.</span>
          </div>
      }
    </div>
  );
}

export default App;
