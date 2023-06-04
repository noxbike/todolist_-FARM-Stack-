import React, { useEffect, useState } from 'react'
import './cardCollection.css'
import CircularProgress from '@mui/material/CircularProgress';
import { todo } from '../data/datatest';

export default function CardCollection(props) {
    const [todolist, setTodolist] = useState(null)

    useEffect(() => {
        let tab = []
        for(let item in todo){
            todo[item].lists === props.data.name && tab.push(todo[item])
        }
        setTodolist(tab.length > 0 ? tab : null)
    },[])
    const filter = () => {
        let count = 0
        todolist && todolist.filter(todo => todo.complete === true && count++)
        return count;
    }
    const percentageTodoDone = () => {
        return (todolist && 100/todolist.length)*filter()
    }
  return (
    <div id='card-collection'>
        <div className="collection-icon" style={{background: `${props.data.color}`}}>
            {props.data.icon}
        </div>
        <div className='collection-bottom'>
            <h2>{props.data.name}</h2>
            <div className='collection-detail'>
                <p>{filter()}/{todolist ? todolist.length : '0'} done</p>
                <CircularProgress variant="determinate" thickness={7} size={"1.5rem"} sx={{color: props.data.color}} value={percentageTodoDone()} />
            </div>
        </div>
    </div>
  )
}
