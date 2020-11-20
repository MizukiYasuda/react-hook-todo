import React, { useState } from 'react'

function TodoForm({ addTodo }) {
  const [val, setVal] = useState('')

  const handleSubmit = e => {
    if (!val) {
      alert('empty!!')
      return
    }
    if (typeof addTodo === 'function') {
      addTodo(val)
    } else {
      alert(`you sent ${val}`)
    }
    setVal('')
    e.preventDefault()
  }

  const handleChange = (event) => {
    setVal(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={val}
        onChange={handleChange}
      ></input>
      <button type="submit">送信</button>
    </form>
  )
}

export default TodoForm