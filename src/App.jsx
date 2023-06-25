import { useEffect, useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import { createTodo, deleteItem, getAllTodo, updateTodo, updateTodoStatus } from './utils/handleApi';
import Toast from './components/Toast';

function App() {
  const [todo, setTodo] = useState([])
  const [text, setText] = useState("")
  const [todoId, setTodoId] = useState("")
  const [isUpdating, setIsUpating] = useState(false)
  useEffect(() => {
    getAllTodo(setTodo)
  }, []);

  const updateMode = (_id, text) => {
    setIsUpating(true)
    setText(text)
    setTodoId(_id)
  }

  const deleteTodo = (_id) => {
    deleteItem(_id, setTodo)
  }

  return (
    <div className='App'>
      <div className="container">
        <h1>TODO APP</h1>
        <div className="top">
          <input 
          type="text" 
          placeholder='Add your tasks...' 
          value={text}
          onChange={(e)=> setText(e.target.value)} 
          />
          <div className="add" onClick={isUpdating ? () => updateTodo(todoId, text, setTodo,  setText, setIsUpating) : () => createTodo(text, setText, setTodo)}>
          { isUpdating ? "Update" : "Add" }
          </div>
        </div>
        <div className="list">
          {
            todo.map(item => <Todo 
            key={item._id} 
            text={item.text}
            done={item.done} 
            updateMode={() => updateMode(item._id, item.text)} 
            deleteTodo={() => deleteTodo(item._id)} 
            handleMarkAsDone = {()=> updateTodoStatus(item._id, item.done, setTodo)}
            />)
          }
        </div>
      </div>
      <Toast />
    </div>
  )
}

export default App
