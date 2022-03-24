import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'data',
    initialState: {
        data: []
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
        removeTodo (state, action) {
            state.data = state.data.filter(item => item.id !== action.payload.id)
        },
    }
});

export const {addTodo, toggleTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;