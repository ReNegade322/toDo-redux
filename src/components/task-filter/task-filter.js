import './task-filter.css'

const TaskFilter = () => {
    return (
        <div className='task--filter'>
            <span className='items--counter'>1 items left</span>
            
            <div className='filter--btn--group'>
                <button className='filter--btn btn--pressed'>
                All</button>
                <button 
                    className='filter--btn btn--pressed'>
                Active</button>
                <button 
                    className='filter--btn btn--pressed'>
                Completed</button>
            </div>

            <button className='clear--items'>Clear completed</button>
        </div>
    )
}

export default TaskFilter