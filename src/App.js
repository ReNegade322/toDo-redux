import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTodo } from './store/todoSlice';

import ToDoInput from './components/input-panel/input-panel'
import ToDoItemList from './components/todo-item-list/todo-item-list'
import TaskFilter from './components/task-filter/task-filter'

import './App.css';

function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  // const addTask = () => dispatch(addTodo(text));
  const addTask = (e) => {  
    e.preventDefault();
    if (text.length){
      dispatch(addTodo({text}));
      setText('')
    }
  }
  
  return (
    <div className="App">
      <h1 className="title">todos</h1>

      <div className='mane--container'>
        <ToDoInput text={text} handleInput={setText} handleSubmit={addTask}/>
        <ToDoItemList />  
        {/* <TaskFilter /> */}
      </div>
    </div>
  );
}

export default App;
