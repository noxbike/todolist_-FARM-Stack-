import React, {useState, useEffect} from 'react'
import './chart.css'
import BarChartIcon from '@mui/icons-material/BarChart';
import { weekday } from '../../date/date';
import { useSelector } from 'react-redux';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
);


export default function Chart() {
	const todolist = useSelector(state => state.todolist.value);
	const [completedTasksCountByDay, setCompletedTasksCountByDay] = useState();
	
	// filter all todo completed for each day of the week
	useEffect(() => {
		let today = new Date();
		let day = today.getDay();
		let monday = new Date().setDate(today.getDate() - day);
		monday = new Date(monday)
		monday.setHours(0)
		monday.setMinutes(0)
		let tab = [0, 0, 0, 0, 0, 0, 0]
		
		for(let item in todolist){
			let dateItem = new Date(todolist[item].dateCompletion)
			let dayItem = dateItem.getDay();
			if(todolist[item].complete){
				if(dateItem >= monday && dateItem <= today){
						tab[dayItem]++
					} 
				}
			}
			setCompletedTasksCountByDay(tab);
	}, [todolist]);

	const data = {
		labels: weekday,
		datasets: [{
			data: completedTasksCountByDay,
			backgroundColor: ["rgb(235,0,205)"],
			borderWidth: 20,
			borderRadius: 27 ,
			borderColor: "rgba(255,255,255, 0)",
		}]
	};

	return (
		<div id='chart'>
			<div className='header'>
				<div className='left'>
					<div className='icon'>
						<BarChartIcon/>
					</div>
					<p>Statistics</p>
				</div>
				<div className='right'>
					<p>last 7 days</p>
				</div>
			</div>
			<Bar data={ data } />
		</div>
	)
}