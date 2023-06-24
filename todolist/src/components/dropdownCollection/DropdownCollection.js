import React, { useEffect, useState } from 'react'
import "./dropdownCollection.css"
import Accordion from '@mui/material/Accordion';
import CheckIcon from '@mui/icons-material/Check';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Link } from 'react-router-dom'
import { completeTodolist } from '../../features/todolist/todolistSlice';
import { day, onlyTodayTodo } from '../date/date'
import { useSelector, useDispatch } from 'react-redux';


export default function DropdownCollection(props) {
    const collection = props.collection;
    const dispatch = useDispatch();
    const todoLists = useSelector(state => state.todolist.value)
    const [expanded, setExpanded] = useState(false);
    const [todolist, setTodolist] = useState(null);

    //mark a todolist complete when it's done
    //using redux dispatch
    const handleCheck = (index) => {
        dispatch(completeTodolist(index));
    }

    //open or close accordion
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    //Add in todolist all task to do for today
    useEffect(() => {
        if(todoLists) {
            let todayTodo = todoLists.filter(todo => onlyTodayTodo(todo, collection));
            setTodolist(todayTodo.length > 0 ? todayTodo : null);
        }
    },[todoLists, collection])

  return (
    <div id='Accordion'>
        <Accordion className='container' expanded={ expanded === 'panel1'} onChange={ handleChange('panel1') }>
            <AccordionSummary
                expandIcon={ <ExpandMoreIcon /> }
                aria-controls="panel1bh-content"
                id="panel1bh-header"
            >
                <Typography className='head-accordion' sx={{ width: '33%', flexShrink: 0 }}>
                    <span className="icon-collection" style={{ background: `${ collection.color }` }}>{ collection.icon }</span>
                    { collection.name }
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <div className='todo-list'>
                    
                    { todolist && todolist.map((item) =>
                        <div key={ item.id }>
                            <div className='check' onClick={ () => handleCheck(item.id) } style={{ border: `4px solid ${ collection.color }` }}>
                                <CheckIcon className="icon" sx={{ color:`${ !item.complete ? "#1e1e1e" : "black"}` }}/>
                            </div>
                            <div className='detail'>
                                <p className='task'>{ item.task }</p>
                                <p className='hours'>{ day(item.when) }</p>
                            </div>
                        </div>
                    )}
                    { !todolist && <h2 className='nothingtodo'>Nothing to do today</h2> }
                    
                </div>
                <div className='link'>
                    <Link to={ `/collection/${ collection.name }` }>Go to collection</Link>
                    <ArrowForwardIcon/>
                </div>
            </AccordionDetails>
        </Accordion>
    </div>
  )
}