import "./input-panel.css"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { checkAll } from '../../store/todoSlice';

const ToDoInput = ({text, handleInput, handleSubmit}) => {
    const dispatch = useDispatch();
    
    const data = useSelector(state => state.data.data);
    let clazz = 'checkbox--filler'
    if ( data.length === 0 ) {
        clazz += ' hide--filler'
    }    

    return(
        <form 
            className='todo-input--form'
            onSubmit={handleSubmit}>
            <label className={clazz} onClick={() => dispatch(checkAll())} />
            <input type="text" 
                   placeholder='What needs to be done?' 
                   className="todo-input" 
                   value={text}
                   onChange={(e) => handleInput(e.target.value)}/>
        </form>        
    )
}

export default ToDoInput