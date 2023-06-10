import { createSlice } from '@reduxjs/toolkit'
import { datatodo } from '../../components/data/datatest'

export const todolistSlice = createSlice({
    name: 'todolist',
    initialState: {
        value: datatodo(3)
    },
    reducers: {
        getTodolist: state => {},
        addTodolist: (state, action) => {
            let tab = state.value
            tab.push(action.payload)
            state.value = tab
        },
        deleteTodolist: state => {},
        updateTodolist: state => {}
    }
})

export const { getTodolist, addTodolist, updateTodolist, deleteTodolist} = todolistSlice.actions

export default todolistSlice.reducer