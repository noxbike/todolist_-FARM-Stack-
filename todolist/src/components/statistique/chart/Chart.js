import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import './chart.css'
import BarChartIcon from '@mui/icons-material/BarChart';
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

const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sathurday', 'Sunday'];

export default function Chart() {
  const todolist = useSelector(state => state.todolist.value);
  const [completedTasksCountByDay, setCompletedTasksCountByDay] = useState();
  
  const data = {
    labels: labels,
    datasets: [{
      data: completedTasksCountByDay,
      backgroundColor: [
        "rgb(235,0,205)",
      ],
      borderWidth: 20,
      borderRadius: 27 ,
      borderColor: "rgba(255,255,255, 0)",
    }]
  };

  useEffect(() => {
    const countTasksByDay = () => {
      const countByDay = {
        Monday: 0,
        Tuesday: 0,
        Wednesday: 0,
        Thursday: 0,
        Friday: 0,
        Saturday: 0,
        Sunday: 0
      };

      todolist.forEach(item => {
        if (item.complete && item.when) {
          const completionDate = new Date(item.when);
          const dayOfWeek = completionDate.toLocaleDateString('en-US', { weekday: 'long' });

          if (countByDay.hasOwnProperty(dayOfWeek)) {
            countByDay[dayOfWeek]++;
          }
        }
      });
      const tab = []
      for(let item in countByDay){
        tab.push(countByDay[item])
      }

      setCompletedTasksCountByDay(tab);
    };

    countTasksByDay();
  }, [todolist]);

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
        <Bar data={data} />
    </div>
  )
}
