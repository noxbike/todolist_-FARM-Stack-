import { createSlice } from '@reduxjs/toolkit'
import { collections } from '../../components/data/datatest'

export const collectionsSlice = createSlice({
    name: 'collections',
    initialState:{
        value: collections,
    },
    reducers: {
        getCollection: state => {},
        addCollection: (state, action)=> {
            let tab = state.value
            tab.push(action.payload)
            state.value = tab
        },
        deleteCollection: (state, action) => {},
        updateCollection: (state, action) => {}
    }
})

export const {getCollection, addCollection, updateCollection, deleteCollection} = collectionsSlice.actions

export default collectionsSlice.reducer