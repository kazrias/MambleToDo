import React from 'react'

const Modal = ({active,setActive,remove, task}) => {
  function removeAndClose(){
    remove(task.id);
    setActive(false);
  }
  return (
    <div className={active?'modal active':'modal'} onClick={()=>setActive(false)}>
      <div className="modal__content" onClick={e=>e.stopPropagation()}>
        <h5>Are you sure you want to delete?</h5>
        <div className='btn__wrapper'>
          <button onClick={()=>removeAndClose()} className='btn__delete'>Yes</button>
          <button onClick={()=>setActive(false)}className='btn__delete'>No</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
