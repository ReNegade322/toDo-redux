import "./input-panel.css"

const ToDoInput = ({text, handleInput, handleSubmit}) => {
    return(
        <form 
            className='todo-input--form'
            onSubmit={handleSubmit}>
            <label className='checkbox--filler' />
            <input type="text" 
                   placeholder='What needs to be done?' 
                   className="todo-input" 
                   value={text}
                   onChange={(e) => handleInput(e.target.value)}/>
        </form>        
    )
}

export default ToDoInput