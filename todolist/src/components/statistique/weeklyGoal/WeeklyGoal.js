import React, { useState, useEffect } from 'react'
import './weeklyGoal.css'
import CircularProgress from '@mui/material/CircularProgress';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useSelector } from 'react-redux';
import { shortday } from '../../date/date';

export default function WeeklyGoal(props) {
	const [completedTasksCount, setCompletedTasksCount] = useState(0);
	const [percentage, setPercentage] = useState(0)
	const todolist = useSelector(state => state.todolist.value);
	const totalcount = useSelector(state => state.settings.value);

	useEffect(() => {
		let today = new Date();
		let day = today.getDay();
		let monday = new Date().setDate(today.getDate() - day);
		monday = new Date(monday)
		monday.setHours(0)
		monday.setMinutes(0)
		let countComplete = 0;
			
		for(let item in todolist){
			let dateItem = new Date(todolist[item].dateCompletion)
			if(dateItem >= monday && dateItem <= today){
					todolist[item].complete && countComplete++
			}
		}
		setPercentage(100/totalcount.numberOfGoal*countComplete)
		setCompletedTasksCount(countComplete);
		
	}, [todolist, totalcount]);

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
						<p><span className='subText'>Goal Progress</span><br/> { completedTasksCount }/{ totalcount.numberOfGoal } tasks completed</p>
					</div>
				</div>
				<div className='right'>
					<p className='header subText'>{ shortday[totalcount.week[0]] }-{ shortday[totalcount.week[1]] }</p>
					<CircularProgress variant='determinate' size={ '7rem' } thickness={ 7 } sx={{ color: 'rgb(235,0,205)' }} value={ percentage }/>
				</div>
			</div>
			<div className='button'>
				<Stack direction="row" spacing={2}>
					<Chip label="Show completed" sx={{borderRadius: '10px'}} variant={`${props.view && "outlined"}`} onClick={() => props.setView(false)}/>
					<Chip label="Edit Goal" sx={{borderRadius: '10px'}} variant={`${!props.view && "outlined"}`} onClick={() => props.setView(true)}/>
				</Stack>
			</div>
		</div>
	)
}
