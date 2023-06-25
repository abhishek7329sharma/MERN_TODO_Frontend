import React, { useState } from 'react'
import { BiEdit } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'
const Todo = ({ text, updateMode, deleteTodo, done, handleMarkAsDone }) => {
  
  return (
    <div className={`todo ${done ? 'done' : ''}`}>
    <div className="checkbox">
      <input
        type="checkbox"
        checked={done}
        onChange={handleMarkAsDone}
        id={`checkbox-${text}`}
      />
      <label htmlFor={`checkbox-${text}`} />
    </div>
    <div className="text">{text}</div>
    <div className="icons">
      <BiEdit className="icon update" onClick={updateMode} />
      <AiFillDelete className="icon delete" onClick={deleteTodo} />
    </div>
  </div>

  )
}

export default Todo