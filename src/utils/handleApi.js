import axios from 'axios'
import { toast } from 'react-hot-toast'

const baseURL = `https://mern-todo-backend-6rij.onrender.com`

const getAllTodo = (setTodo) => {
    axios.get(baseURL)
        .then(({ data }) => {
            setTodo(data)
        })
}

const createTodo = (text, setText, setTodo) => {
    axios.post(`${baseURL}/create`, { text })
        .then(({ data }) => {
            setText("")
            getAllTodo(setTodo)
            toast.success('Item added successfully!');
        }).catch(err => console.log(err))
}

const updateTodo = (id, text, setTodo, setText, setIsUpating) => {
    axios.post(`${baseURL}/update`, { _id: id, text })
        .then((data) => {
            setText("")
            setIsUpating(false)
            getAllTodo(setTodo)
            toast.success('Item updated successfully!');
        }).catch(err => console.log(err))
}

const deleteItem = (_id, setTodo, setText) => {
    axios.post(`${baseURL}/delete`, { _id })
        .then((data) => {
            getAllTodo(setTodo)
            toast.success('Item deleted successfully!');
        }).catch(err => console.log(err))
}

const updateTodoStatus = (_id, done, setTodo) => {
    axios
        .post(`${baseURL}/status`, { _id, done })
        .then(() => {
            getAllTodo(setTodo);
            // toast.success('Yahh!!! one task completed!');
        })
        .catch(err => console.log(err));
};

export { getAllTodo, createTodo, updateTodo, deleteItem, updateTodoStatus } 