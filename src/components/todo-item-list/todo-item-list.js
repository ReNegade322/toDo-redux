import ToDoItem from '../todo-item/todo-item';
import { useSelector } from 'react-redux';

import './todo-item-list.css'

const ToDoItemList = () => {
    const data = useSelector(state => state.data.data);
    const filter = useSelector(state => state.data.filter);

    let visualData = [];
    if (filter === 'completed') {
        visualData = data.filter(item => item.completed !== false)
    }else if (filter === 'active') {
        visualData = data.filter(item => item.completed !== true)
    } else if (filter === 'all') {
        visualData = data
    }

    return (
        <div className="todo--item--list">          
            {
                visualData.map(item => <ToDoItem key={item.id} {...item} /> )
            }
        </div>
    )
}

export default ToDoItemList