import axios from 'axios'

const baseURL = `https://mern-todo-backend-miqn.onrender.com`

const getAllTodo = (setTodo) => {
    axios.get(baseURL)
    .then(({data})=>{
        setTodo(data)
    })
}

const createTodo = (text, setText, setTodo) => {
    axios.post(`${baseURL}/create`, { text })
    .then(({data})=>{
        setText("")
        getAllTodo(setTodo)
    }).catch(err => console.log(err))
}

const updateTodo = (id, text, setTodo, setText, setIsUpating) => {
    axios.post(`${baseURL}/update`, { _id:id,  text })
    .then((data)=>{
        setText("")
        setIsUpating(false)
        getAllTodo(setTodo)
    }).catch(err => console.log(err))
}

const deleteItem = (id, setTodo) => {
    axios.post(`${baseURL}/delete`, { _id:id })
    .then((data)=>{
        getAllTodo(setTodo)
    }).catch(err => console.log(err))
}

export { getAllTodo, createTodo, updateTodo, deleteItem } 