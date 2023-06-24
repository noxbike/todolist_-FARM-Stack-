import React, { useEffect, useState } from 'react';
import './cardCollection.css';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';

export default function CardCollection(props) {
    const [todoCategorisedInCollection, setTodoCategorisedInCollection] = useState({totalCount: 0, completedCount: 0});
    const todolist = useSelector(state => state.todolist.value)
    const collections = props.collection;
    const favorites = props.favorites

    useEffect(() => {
        if(todolist) {
            let totalCount = todolist.filter(todo => todo.lists === collections.name)
            let completedCount = totalCount.filter(todo => todo.complete).length
            setTodoCategorisedInCollection({totalCount: totalCount.length, completedCount: completedCount})
        }
    },[collections, todolist, favorites])

    //find a percentage of work already do and comparate to the goal he want rea
    const percentageTodoDone = () => {
        return (100/todoCategorisedInCollection.totalCount * todoCategorisedInCollection.completedCount)
    }

    return (
        <div id='card-collection'>
            <div className="collection-icon" style={{ background: `${ collections.color }` }}>
                { collections.icon }
            </div>
            <div className='collection-bottom'>
                <h2>{ collections.name }</h2>
                <div className='collection-detail'>
                    <p>{ todoCategorisedInCollection.completedCount }/{ todoCategorisedInCollection.totalCount } done</p>
                    <CircularProgress variant="determinate" thickness={ 7 } size={ "1.5rem" } sx={{ color: collections.color }} value={percentageTodoDone()} />
                </div>
            </div>
        </div>
    )
}