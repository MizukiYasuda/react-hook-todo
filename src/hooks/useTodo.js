import { useState, useEffect } from 'react'
import todoService from '../services/todos'

export default function useTodo() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    setTodos(todoService.getAll())
  }, [])

  const addTodo = text => {
    console.log('useTodo.addTodo')
    todoService.add(text)

  }

  const deleteTodo = id => {
    todoService.delete(id)
  }

  return {todos, addTodo, deleteTodo}
}