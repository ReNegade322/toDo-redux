import './task-filter.css'
import { useDispatch, useSelector } from 'react-redux';
import { clearCompleted, onFilterSelect } from '../../store/todoSlice'

const TaskFilter = () => {
    const data = useSelector(state => state.data.data);
    const filter = useSelector(state => state.data.filter);
    const dispatch = useDispatch();

    let filterClass = 'task--filter'
    if (data.length === 0) {
        filterClass += ' hide--filter'
    }

    let taskLeft = 0
    data.forEach(elem => {
        if(elem.completed === false){
            taskLeft++
        }
    });
    let clearClass = 'clear--items'
    if (taskLeft === data.length) {
        clearClass += ' hide--filter'
    }

    let filterBtn1 = 'filter--btn'
    let filterBtn2 = 'filter--btn'
    let filterBtn3 = 'filter--btn'

    if (filter === 'completed') {
        filterBtn1 += ' btn--pressed'
    }else if (filter === 'active') {
        filterBtn2 += ' btn--pressed'
    } else if (filter === 'all') {
        filterBtn3 += ' btn--pressed'
    }

    return (
        <div className={filterClass}>
            <span className='items--counter'>Items left: {data.filter(item => !item.completed).length} </span>
            
            <div className='filter--btn--group'>
                <button className={filterBtn3}
                        onClick={() => dispatch(onFilterSelect('all'))}>
                All</button>
                <button 
                    className={filterBtn2}
                    onClick={() => dispatch(onFilterSelect('active'))}>
                Active</button>
                <button 
                    className={filterBtn1}
                    onClick={() => dispatch(onFilterSelect('completed'))}>
                Completed</button>
            </div>

            <button className={clearClass} onClick={() => dispatch(clearCompleted())}>Clear completed</button>
        </div>
    )
}

export default TaskFilter