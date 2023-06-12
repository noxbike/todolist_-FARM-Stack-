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
  const [percentage, setPercentage] = useState(0)
  const todolist = useSelector(state => state.todolist.value);

  useEffect(() => {
	let today = new Date();
	let day = today.getDay();
	let monday = new Date().setDate(today.getDate() - day);
	monday = new Date(monday)
	monday.setHours(0)
	monday.setMinutes(0)
	let countComplete = 0;
	let countTotal = 0;
		
	for(let item in todolist){
	  let dateItem = new Date(todolist[item].dateCompletion)
	  if(dateItem >= monday && dateItem <= today){
		countTotal++;
	  		if(todolist[item].complete){
				countComplete++
			} 
		}
	  }
	  setPercentage(100/countTotal*countComplete)
	  setCompletedTasksCount(countComplete);
	  setTotalTasksCount(countTotal);
    
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
            <CircularProgress variant='determinate' size={'7rem'} thickness={7} sx={{color: 'rgb(235,0,205)'}} value={percentage}/>
          
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
