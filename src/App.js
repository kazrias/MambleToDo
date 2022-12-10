import React, { useState,useEffect } from 'react';
import './fonts/fonts.css';
import './App.css';
import InputForm from './components/InputForm';
import Task from './components/Task';
import Modal from './components/Modal';

function App() {
  const [tasks, setTasks] = useState([]);
  const [modalActive,setModalActive]=useState(false)
  const changeActive=(val)=>{
    setModalActive(val);
  }
  const createTask = (task) => {
    const newTask = {
      id: Date.now(),
      task: task[0].toUpperCase()+task.slice(1),
      completed: false,
    }
    setTasks([newTask, ...tasks])
  }

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }
  const statusTask = (id) => {
    let newTasks=[...tasks].filter(task=>{
      if(task.id==id){
        task.completed=!task.completed
      }
      return task;
    })
    setTasks(newTasks);
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
              status={statusTask}
              task={task}
              remove={removeTask}
              key={task.id}
              changeActive={changeActive}
              active={modalActive}
              setModalActive={setModalActive}
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
