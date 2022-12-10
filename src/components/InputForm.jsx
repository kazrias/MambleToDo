import React, { useState } from 'react'

const InputForm = ({ create }) => {
  const [task, setTask] = useState('');
  const [inputLimit, setInputLimit] = useState(false);
  const handleChange = (e) => {
    if (e.target.value.length <= 54) {
      setInputLimit(false);
      setTask(e.target.value);
    }
    else {
      setInputLimit(true);
    }
  }
  const addNewTask = (e) => {
    e.preventDefault();
    create(task);
    setTask('');
  }
  return (
    <div className='wrapper'>
      <label className='checkbox checkbox__hide'>
          <div className='checkbox__hide-box'>
            <input className='checkbox__input' type="checkbox" />
            <span className='checkbox__span'></span>
          </div>
          <span className='checkbox__task'>Hide completed</span>
        </label>
      <p className='task'>Task</p>
      <form className='form'>
        <input className={!inputLimit ? 'input' : 'input input-limit'}
          type="text"
          placeholder='Write here'
          onChange={handleChange}
          value={task} />
        {inputLimit && <span className='Error'>Task content can contain max 54 characters.</span>}
        <button className='btn' disabled={!task} onClick={addNewTask}>Add</button>
      </form>
  
    </div>
  )
}

export default InputForm
