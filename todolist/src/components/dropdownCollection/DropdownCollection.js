import React, { useEffect, useState } from 'react'
import "./dropdownCollection.css"
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom'
import { day, onlyTodayTodo } from '../date/date'
import { useSelector, useDispatch } from 'react-redux';
import { completeTodolist } from '../../features/todolist/todolistSlice';
import CheckIcon from '@mui/icons-material/Check';


export default function DropdownCollection(props) {
    const [expanded, setExpanded] = useState(false);
    const [todolist, setTodolist] = useState(null);
    const todoLists = useSelector(state => state.todolist.value)
    const collection = props.collection;
    const dispatch = useDispatch();

    const handleCheck = (index) => {
        dispatch(completeTodolist(index));
    }

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    useEffect(() => {
        let tab = [];
        if(todoLists) {
            for(let item in todoLists){
                onlyTodayTodo(todoLists[item], collection) && tab.push(todoLists[item])
            }
            let result = tab.length > 0 ? tab : null;
            return setTodolist(result);
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
                    <span className="icon-collection" style={{ background: `${collection.color }` }}>{ collection.icon }</span>
                    { collection.name }
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <div className='todo-list'>
                    
                    { todolist && todolist.map((item) =>
                        <div key={ item.id }>
                            <div className='check' onClick={ () => handleCheck(item.id) } style={{ border: `4px solid ${ collection.color }` }}>
                                <CheckIcon className="icon" sx={{color:`${!item.complete ? "#1e1e1e" : "black"}`}}/>
                            </div>
                            <div className='detail'>
                                <p className='task'>{item.task}</p>
                                <p className='hours'>{day(item.when)}</p>
                            </div>
                        </div>
                    )}
                    { !todolist && <h2 className='nothingtodo'>Nothing to do today</h2> }
                    
                </div>
                <div className='link'>
                    <Link to={`/collection/${ collection.name }`}>Go to collection</Link>
                    <ArrowForwardIcon/>
                </div>
            </AccordionDetails>
        </Accordion>
    </div>
  )
}