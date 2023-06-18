import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { weekday } from '../../date/date';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import './editGoal.css'

export default function EditGoal() {
  const [numberGoal, setNumberGoal] =useState(0)
  const [from, setFrom] = useState("Monday")
  const [to, setTo] = useState("Sunday");

  const onSubmit = () => {
    
  }

  return (
    <div id="EditGoal">
      <h3>Edit Goal</h3>
      <Box onSubmit={onSubmit}
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
              value={from}
              onChange={event => setFrom(event.target.value)}
          >
              {weekday.map(day => 
                  <MenuItem value={day}>{day}</MenuItem>
              )}
          </Select>
          <InputLabel id="demo-simple-select-filled-label">To</InputLabel>
          <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={to}
              onChange={event => setTo(event.target.value)}
          >
              {weekday.map(day => 
                  <MenuItem value={day}>{day}</MenuItem>
              )}
        </Select>
        <div className='input'>
          <TextField id="filled-basic" label="Goal Number" variant="filled" value={numberGoal} onChange={(e) => setNumberGoal(e.target.value)} />
        </div>

      <div className='button'>
          <button type="submit">Save</button>
      </div>

    </Box>
    </div>
  )
}
