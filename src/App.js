import { useState } from 'react';

import ToDoInput from './components/input-panel/input-panel'
import ToDoItemList from './components/todo-item-list/todo-item-list'
import TaskFilter from './components/task-filter/task-filter'

import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [text, setText] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (text.trim().length){
      setData([
        ...data,
        {
          id: new Date().toISOString(),
          text,
          completed: false,
        }
      ])
      setText('');
    }
  }

  const toggleTodo = (todoId) => {
    setData(
      data.map(
        item => {
          if (item.id !== todoId) return item;

          return {
            ...item,
            completed: !item.completed
          }
        }
      )
    )
  }
  
  const removeTodo = (todoId) => {
    setData(data.filter(item => item.id !== todoId))
  }
  
  return (
    <div className="App">
      <h1 className="title">todos</h1>

      <div className='mane--container'>
        <ToDoInput text={text} handleInput={setText} handleSubmit={addTodo}/>
        <ToDoItemList data={data} removeTodo={removeTodo} toggleTodo={toggleTodo}/>  
        <TaskFilter />
      </div>
    </div>
  );
}

export default App;
