import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'data',
    initialState: {
        data: [],
        filter: 'all'
    },
    reducers: {
        addTodo(state, action) {
            state.data.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                completed: false,
              });
        },
        toggleTodo(state, action) {
            const toggledTodo = state.data.find(item => item.id === action.payload.id);
            toggledTodo.completed = !toggledTodo.completed;
        },
        removeTodo(state, action) {
            state.data = state.data.filter(item => item.id !== action.payload.id)
        },
        checkAll(state) {
            let checkedCouter = 0
            state.data.forEach(item => {
                if (item.completed) {
                    checkedCouter++
                }
            }) 
            state.data = state.data.map((item) => {
                if (checkedCouter === state.data.length){
                    return{...item, completed: false}
                } else{
                    return{...item, completed: true}
                }
            })                   
        },
        clearCompleted(state) {
            state.data = state.data.filter(item => item.completed === false)
        },
        onFilterSelect(state, action) {
            state.filter = action.payload
        },
    }
});

export const {addTodo, toggleTodo, removeTodo, checkAll, clearCompleted, onFilterSelect} = todoSlice.actions;
export default todoSlice.reducer;







// filterPost = (items, filter) => {
    // switch (filter) {
    //     case 'active':
    //         return items.filter(item => item.completed === false);
    //     case 'completed':
    //         return items.filter(item => item.completed === true)
    //     default: 
    //         return items
    // }
//   }
