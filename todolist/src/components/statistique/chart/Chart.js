import React from 'react'
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
const randomChart = [1, 5, 4, 20, 19, 4, 0]
const data = {
  labels: labels,
  datasets: [{
    data: randomChart,
    backgroundColor: [
      "rgb(235,0,205)",
    ],
    borderWidth: 20,
    borderRadius: 27 ,
    borderColor: "rgba(255,255,255, 0)",
  }]
};

export default function Chart() {
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
