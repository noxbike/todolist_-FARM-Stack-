import React from 'react'
import './todolist.css'
import CheckIcon from '@mui/icons-material/Check';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { day, colorDate } from '../date/date'
import { completeTodolist } from '../../features/todolist/todolistSlice';
import { useDispatch, useSelector } from 'react-redux';


export default function Todolist(props) {
    const dispatch = useDispatch();
    const collections = useSelector(state => state.collections.value);
    const todolists = props.todolists;
    const isComplete =  props.isComplete;

    //Mark the todo complete
    const handleChange = (index) => {
        dispatch(completeTodolist(index));
    }
    
    //get the collection colors for the todo checkbox design
    const getColor = (nameOfCollection) => {
        let findCollection = collections.filter(collection => collection.name === nameOfCollection)[0]
        return findCollection.color;
    }

    return (
        <div id='todolist'>
            { todolists && todolists.map((todo, index) => 
                <div key={ index } className='todo'>

                    <div className="check" onClick={ () => handleChange(todo.id) } style={{ border:`4px solid ${ getColor(todo.lists) }`, background: `${ todo.complete && getColor(todo.lists) }`}}>
                            <CheckIcon className="icon" sx={{ color:`${ !todo.complete ? "#1e1e1e" : "black" }` }}/>
                    </div>

                    <div className={ `detail-${ !isComplete ? "complete":"incomplete" }` }>
                        <p>{ !isComplete ? todo.task : <strike>{ todo.task }</strike> }</p>
                        { !isComplete && <p className="hours" style={{ color: `${ colorDate(todo.when) }` }}>{ day(todo.when).length > 0 && <DateRangeIcon sx={{ fontSize: 17 }}/>}{ day(todo.when) }</p> }
                    </div>
                </div>
            ).reverse()}
        </div>
    )
}