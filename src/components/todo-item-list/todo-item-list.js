import ToDoItem from '../todo-item/todo-item'
import './todo-item-list.css'

const ToDoItemList = ({data, removeTodo, toggleTodo}) => {
   return (
        <div className="todo--item--list">          
            {
                data.map(item => <ToDoItem key={item.id} {...item} toggleTodo={toggleTodo} removeTodo={removeTodo}/> )
            }
        </div>
   )
}

export default ToDoItemList