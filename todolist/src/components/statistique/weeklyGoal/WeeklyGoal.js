import React, { useState, useEffect } from 'react'
import './weeklyGoal.css'
import CircularProgress from '@mui/material/CircularProgress';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useSelector } from 'react-redux';

export default function WeeklyGoal() {
  const [totalTasksCount, setTotalTasksCount] = useState(0);
  const [completedTasksCount, setCompletedTasksCount] = useState(0);
  const todolist = useSelector(state => state.todolist.value);

  useEffect(() => {
      const today = new Date();
      const monday = new Date(today.setDate(today.getDate() - today.getDay() + 1));
      
      const totalTasks = todolist.length;
      const completedTasks = todolist.filter(item => {
        if(item.complete){
            return true
        }
      }).length;
      
      setTotalTasksCount(totalTasks);
      setCompletedTasksCount(completedTasks);
    
  }, [todolist]);

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
            <p><span className='subText'>Goal Progress</span><br/> {completedTasksCount}/{totalTasksCount} tasks completed</p>
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
