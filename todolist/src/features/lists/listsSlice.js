import { createSlice } from '@reduxjs/toolkit'
import { lists } from '../../components/data/datatest'

export const listSlice = createSlice({
    name: 'list',
    initialState:{
        value: lists,
    },
    reducers: {
        getLists: state => {},
        addList: (state, action)=> {
            let tab = state.value
            tab.push(action.payload)
            state.value = tab
        },
        deleteList: (state, action) => {},
        updateList: (state, action) => {}
    }
})

export const {getLists, addList, updateList, deleteList} = listSlice.actions

export default listSlice.reducer