import React from 'react'
import './weeklyGoal.css'
import CircularProgress from '@mui/material/CircularProgress';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function WeeklyGoal() {
  return (
    <div id="weeklyGoal">
      <div className="container">
        <div className='left'>
          <div className='header'>
            <div className='icon'>
              <CalendarMonthIcon/>
            </div>
            <p>Weekly Goal</p>
          </div>
          <div className='numberTaskComplete'>
            <p><span className='subText'>Goal Progress</span><br/> 4/20 tasks completed</p>
          </div>
        </div>
        <div className='right'>
          <p className='header subText'>Mon-Fri</p>
          <CircularProgress variant='determinate' size={'7rem'} thickness={7} sx={{color: 'rgb(235,0,205)'}} value={70}/>
        </div>
      </div>
      <div className='button'>
        <Stack direction="row" spacing={2}>
          <Chip label="Show completed" sx={{borderRadius: '10px'}} />
          <Chip label="Edit Goal" sx={{borderRadius: '10px'}} variant="outlined" />
        </Stack>
      </div>
    </div>
  )
}
