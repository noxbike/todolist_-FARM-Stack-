import { createSlice } from '@reduxjs/toolkit'
import { collections } from '../../components/data/datatest'

export const collectionsSlice = createSlice({
    name: 'collections',
    initialState:{
        value: collections,
    },
    reducers: {
        getLists: state => {},
        addCollection: (state, action)=> {
            let tab = state.value
            tab.push(action.payload)
            state.value = tab
        },
        deleteList: (state, action) => {},
        updateList: (state, action) => {}
    }
})

export const {getLists, addList, updateList, deleteList} = collectionsSlice.actions

export default collectionsSlice.reducer