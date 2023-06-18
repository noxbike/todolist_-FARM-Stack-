import { createSlice } from '@reduxjs/toolkit'
import { settings } from '../../components/data/datatest'

export const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        value: settings
    },
    reducers: {
        numberOfGoal: (state, action) =>{
            let goal = state.value
            goal.numberOfGoal = action.payload;
            state.value = goal
        },
        week: (state, action) =>{
            let goal = state.value
            goal.week = action.payload;
            state.value = goal
        }
    }
})

export const {numberOfGoal, week} = settingsSlice.actions

export default settingsSlice.reducer