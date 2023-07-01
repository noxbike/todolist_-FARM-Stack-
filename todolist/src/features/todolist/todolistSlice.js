import { createSlice } from '@reduxjs/toolkit'
import { datatodo } from '../../components/data/datatest'

export const todolistSlice = createSlice({
    name: 'todolist',
    initialState: {
        value: datatodo(100)
    },
    reducers: {
        completeTodolist: (state, action) => {
            let findTodoById = state.value.filter(todo => todo.id === action.payload)[0]
            findTodoById.complete = true;
            findTodoById.dateCompletion = new Date();
        },
        addTodolist: (state, action) => {
            let tab = state.value
            tab.push(action.payload)
            state.value = tab
        },
        deleteTodolist: state => {},
        updateTodolist: state => {}
    }
})

export const { completeTodolist, addTodolist, updateTodolist, deleteTodolist} = todolistSlice.actions

export default todolistSlice.reducer