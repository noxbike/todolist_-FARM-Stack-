import React, { useEffect, useState } from 'react';
import './cardCollection.css';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';

export default function CardCollection(props) {
    const [data, setData] = useState(null);
    const todolist = useSelector(state => state.todolist.value)

    useEffect(() => {
        let tab = []
        if(todolist) {
            for(let item in todolist){
                todolist[item].lists === props.data.name && tab.push(todolist[item])
            }
            setData(tab.length > 0 ? tab : null)
        }
    },[props.data.name, todolist, props.favorite])

    const filter = () => {
        let count = 0
        data && data.filter(todo => todo.complete === true && count++)
        return count;
    }

    const percentageTodoDone = () => {
        return (data && 100/data.length)*filter()
    }

    return (
        <div id='card-collection'>
            <div className="collection-icon" style={{background: `${props.data.color}`}}>
                {props.data.icon}
            </div>
            <div className='collection-bottom'>
                <h2>{props.data.name}</h2>
                <div className='collection-detail'>
                    <p>{filter()}/{data ? data.length : '0'} done</p>
                    <CircularProgress variant="determinate" thickness={7} size={"1.5rem"} sx={{color: props.data.color}} value={percentageTodoDone()} />
                </div>
            </div>
        </div>
    )
}
