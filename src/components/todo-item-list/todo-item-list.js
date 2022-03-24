import ToDoItem from '../todo-item/todo-item';
import { useSelector } from 'react-redux';

import './todo-item-list.css'

const ToDoItemList = () => {
    const data = useSelector(state => state.data.data);

   return (
        <div className="todo--item--list">          
            {
                data.map(item => <ToDoItem key={item.id} {...item} /> )
            }
        </div>
   )
}

export default ToDoItemList