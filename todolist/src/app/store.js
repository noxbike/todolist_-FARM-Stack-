import { configureStore } from '@reduxjs/toolkit'
import todolistReducer from '../features/todolist/todolistSlice'
import listReducer from '../features/lists/listsSlice'
import userReducer from '../features/user/userSlice'
import settingsReducer from '../features/settings/settingsSlice'

export default configureStore({
    reducer: {
        todolist: todolistReducer,
        list: listReducer,
        user: userReducer,
        settings: settingsReducer
    }
})