import { configureStore } from '@reduxjs/toolkit'
import todolistReducer from '../features/todolist/todolistSlice'
import listReducer from '../features/lists/listsSlice'

export default configureStore({
    reducer: {
        todolist: todolistReducer,
        list: listReducer,
    }
})