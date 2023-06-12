import React from 'react'
import './todolist.css'
import DateRangeIcon from '@mui/icons-material/DateRange';
import { day, colorDate } from '../date/date'
import CheckIcon from '@mui/icons-material/Check';
import { useDispatch } from 'react-redux';
import { completeTodolist } from '../../features/todolist/todolistSlice';


export default function Todolist(props) {
    const dispatch = useDispatch();

    const handleChange = (index) => {
        dispatch(completeTodolist(index));
      }
  return (
    <div id='todolist'>
        {props.data && props.data.map( (todo, index) => 
            <div key={index} className='todo'>

                <div className={`check`} onClick={() => handleChange(todo.id)} style={{border:`4px solid ${props.color}`, background: `${todo.complete && props.color}`}}>
                        <CheckIcon className="icon" sx={{color:`${!todo.complete ? "#1e1e1e" : "black"}`}}/>
                </div>

                {!props.done && 
                    <div className='detail-complete'>
                        <p>{todo.task}</p>
                        <p className='hours' style={{color: `${colorDate(todo.when)}`}}>{day(todo.when).length > 0 && <DateRangeIcon sx={{fontSize: 17}}/>}{day(todo.when)}</p>
                    </div>
                }
                {props.done &&  
                    <div className='detail-incomplete'>
                        <p><strike>{todo.task}</strike></p>
                    </div>
                }

            </div>
        ).reverse()}
    </div>
  )
}
