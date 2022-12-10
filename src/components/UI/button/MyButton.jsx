import React from 'react'
import classes from './MyButton.module.css'
const MyButton = ({children,addClass,...props}) => {
  return (
    <button {...props} className={classes.MyBtn+' '+addClass}>
      {children}
    </button>
  )
}
export default MyButton
