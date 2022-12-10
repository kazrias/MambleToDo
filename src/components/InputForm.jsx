import React, { useState } from 'react'
import MyButton from './UI/button/MyButton'

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
      console.log('it works here', inputLimit);
    }
  }
  const addNewTask = (e) => {
    e.preventDefault();
    create(task);
    setTask('');
  }
  return (
    <div>
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
