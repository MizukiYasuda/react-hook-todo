import React, { useState, useContext, useEffect } from 'react';
// import ReactDOM from 'react-dom';
import './index.css';

import TodoForm from './components/TodoForm';
import useTodo from './hooks/useTodo'

function App() {
  const { todos, deleteTodo, addTodo } = useTodo();

  // const addTodo = todo => {
  //   alert(`i add todo: ${todo}`)
  // }

  return (
    <div>
      <h1>this is todo app4</h1>
      <TodoForm
        addTodo={addTodo}
      ></TodoForm>
    </div>
  )
}

// ========================================
export default App