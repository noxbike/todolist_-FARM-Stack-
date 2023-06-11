import { createSlice } from '@reduxjs/toolkit'
import { datatodo } from '../../components/data/datatest'

export const todolistSlice = createSlice({
    name: 'todolist',
    initialState: {
        value: datatodo(100)
    },
    reducers: {
        completeTodolist: (state, action) => {
            let tab = state.value;
            for(let key in tab){
                if(tab[key].id === action.payload){
                    tab[key].complete = true;
                }
            }
            state.value = tab;
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