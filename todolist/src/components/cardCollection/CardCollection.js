import React, { useEffect, useState } from 'react';
import './cardCollection.css';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';

export default function CardCollection(props) {
    const [todoCategorisedInCollection, setTodoCategorisedInCollection] = useState(null);
    const todolist = useSelector(state => state.todolist.value)
    const collections = props.collection;
    const favorites = props.favorites

    useEffect(() => {
        let tab = []
        if(todolist) {
            for(let item in todolist){
                todolist[item].lists === collections.name && tab.push(todolist[item])
            }
            setTodoCategorisedInCollection(tab.length > 0 ? tab : null)
        }
    },[collections, todolist, favorites])

    //count the number of todo completed 
    const filter = () => {
        let count = 0
        todoCategorisedInCollection && todoCategorisedInCollection.filter(todo => todo.complete === true && count++)
        return count;
    }

    //find a percentage of work already do and comparate to the goal he want rea
    const percentageTodoDone = () => {
        return (todoCategorisedInCollection && 100/todoCategorisedInCollection.length)*filter()
    }

    return (
        <div id='card-collection'>
            <div className="collection-icon" style={{ background: `${ collections.color }` }}>
                { collections.icon }
            </div>
            <div className='collection-bottom'>
                <h2>{ collections.name }</h2>
                <div className='collection-detail'>
                    <p>{ filter() }/{ todoCategorisedInCollection ? todoCategorisedInCollection.length : '0' } done</p>
                    <CircularProgress variant="determinate" thickness={ 7 } size={ "1.5rem" } sx={{ color: collections.color }} value={percentageTodoDone()} />
                </div>
            </div>
        </div>
    )
}
