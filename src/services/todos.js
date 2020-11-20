// import axios from 'axios';

// const baseUrl = 'http://localhost:3001/todos';

const get = () => {
  return localStorage.getItem('react_todo_list') || '[]'
}
const set = object => {
  localStorage.setItem('react_todo_list', JSON.stringify(object || []))
}

// Todo を取得する
const getAll = () => {
  const response = get()
  return response || [];
};

// Todo を更新する
const update = async (id, newTodo) => {
  const list = JSON.parse(get())
  const targetIndex = list.findIndex(v => v.id === id)
  list[targetIndex] = {
    id,
    text: newTodo,
  }
  set(list)
};

// Todo を削除する
const _delete = id => {
  const list = JSON.parse(get())
  const newList = list.filter(v => v.id !== id)
  set(newList)
};

// Todoを追加する
const add = text => {
  console.log('todos.add')
  const list = JSON.parse(get())
  console.log({list})
  list.push({
    id: Math.floor(Math.random() * Math.floor(999999)),
    text,
  })
  set(list)
};

export default { getAll, update, delete: _delete, add };
