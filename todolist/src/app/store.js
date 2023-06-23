import { configureStore } from '@reduxjs/toolkit'
import todolistReducer from '../features/todolist/todolistSlice'
import collectionsReducer from '../features/collections/collectionsSlice'
import userReducer from '../features/user/userSlice'
import settingsReducer from '../features/settings/settingsSlice'

export default configureStore({
    reducer: {
        todolist: todolistReducer,
        collections: collectionsReducer,
        user: userReducer,
        settings: settingsReducer
    }
})