import React, { useState } from 'react'
import './editGoal.css'
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import { week } from '../../../features/settings/settingsSlice';
import { weekday } from '../../date/date';
import { useDispatch } from 'react-redux';

export default function EditGoal() {
  const dispatch = useDispatch();
  const [to, setTo] = useState(5);
  const [from, setFrom] = useState(0)
  const [numberGoal, setNumberGoal] = useState(0)

  //Save new Goal edited by user
  const onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let data = {
      numberOfGoal: Number(numberGoal),
      week: [from, to]
    }
    dispatch(week(data))
  }

  return (
    <div id="EditGoal">
      <h3>Edit Goal</h3>
      <Box onSubmit={ onSubmit }
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
          <InputLabel id="demo-simple-select-filled-label">From</InputLabel>
          <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={ from }
              onChange={ event => setFrom(event.target.value) }
          >
            { weekday.map((day, index) => 
                <MenuItem key={ index } value={ index }>{ day }</MenuItem>
            )}
          </Select>
          <InputLabel id="demo-simple-select-filled-label">To</InputLabel>
          <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={ to }
              onChange={ event => setTo(event.target.value) }
          >
            {weekday.map((day,index) => index > from &&
                <MenuItem key={ index } value={ index }>{ day }</MenuItem>
            )}
        </Select>
        <div className='input'>
          <TextField id="filled-basic" label="Goal Number" variant="filled" value={ numberGoal } onChange={ (e) => setNumberGoal(e.target.value) } />
        </div>

      <div className='button'>
          <button type="submit">Save</button>
      </div>

    </Box>
    </div>
  )
}
