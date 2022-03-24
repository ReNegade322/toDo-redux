import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../../store/todoSlice';

import './todo-item.css'

const ToDoItem = ({id, text, completed}) => {
    const dispatch = useDispatch();

    let checkboxStyles = 'check--container';
    let textStyles = 'todo--text';

    if (completed) {
        textStyles += ' completed--text'
        checkboxStyles += ' active'
    }

    return(
        <div className="todo--item">
            <label className={checkboxStyles}>
                <input type="checkbox" className='checkbox--none' checked={completed} onChange={() => dispatch(toggleTodo({id}))}/>
            </label>
            <h2 className={textStyles}>{text}</h2>
            <button id="close" onClick={() => dispatch(removeTodo({id}))}></button>
        </div>
    )
}

export default ToDoItem