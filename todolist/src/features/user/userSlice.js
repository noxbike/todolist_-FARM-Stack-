import { createSlice } from '@reduxjs/toolkit'
import { user } from '../../components/data/datatest'

export const userSlice = createSlice({
    name: 'user',
    initialState:{
        value: user
    },
    reducers: {
        update: (state, action) => {}
    }
})

export const { update } = userSlice.actions

export default userSlice.reducer