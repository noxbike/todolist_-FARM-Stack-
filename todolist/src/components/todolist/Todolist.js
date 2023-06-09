import React from 'react'
import './todolist.css'
import DateRangeIcon from '@mui/icons-material/DateRange';
import { day, colorDate } from '../date/date'

export default function Todolist(props) {
  return (
    <div id='todolist'>
        {props.data && props.data.map( (todo, index) => 
            <div key={index} className='todo'>
                <div style={{border:`4px solid ${props.color}`}} className='check'></div>
                {!props.done && 
                    <div className='detail-complete'>
                        <p>{todo.task}</p>
                        <p className='hours' style={{color: `${colorDate(todo.when)}`}}>{day(todo.when).length > 0 && <DateRangeIcon sx={{fontSize: 17}}/>}{day(todo.when)}</p>
                    </div>
                }
                {props.done &&  
                    <div className='detail-incomplete'>
                        <p><strike>{todo.task}</strike></p>
                        <p className='hours' style={{color: `${colorDate(todo.when)}`}}>{day(todo.when)}</p>
                    </div>
                }

            </div>
        )}
    </div>
  )
}
