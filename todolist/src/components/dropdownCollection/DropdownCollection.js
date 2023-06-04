import React, { useEffect, useState } from 'react'
import "./dropdownCollection.css"
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom'
import { todo } from '../data/datatest'
import { day, onlyTodayTodo } from '../date/date'

export default function DropdownCollection(props) {
    const [expanded, setExpanded] = useState(false);
    const [todolist, setTodolist] = useState(null);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    useEffect(() => {
        let tab = [];
        for(let item in todo){
            onlyTodayTodo(todo[item], props.data) && tab.push(todo[item])
        }
        let result = tab.length > 0 ? tab : null;
        return setTodolist(result);
    },[])

  return (
    <div id='Accordion'>
        <Accordion className='container' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            >
                <Typography className='head-accordion' sx={{ width: '33%', flexShrink: 0 }}>
                    <span className="icon-collection" style={{background: `${props.data.color}`}}>{props.data.icon}</span>
                    {props.data.name}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <div className='todo-list'>
                    
                    {todolist && todolist.map((data) =>
                        <div key={data}>
                            <div className='check' style={{border: `4px solid ${props.data.color}`}}></div>
                            <div className='detail'>
                                <p className='task'>{data.task}</p>
                                <p className='hours'>{day(data.when)}</p>
                            </div>
                        </div>
                    )}
                    {!todolist && <h2 className='nothingtodo'>Nothing to do today</h2>}
                    
                </div>
                <div className='link'>
                    <Link to={`/collection/${props.data.name}`}>Go to collection</Link>
                    <ArrowForwardIcon/>
                </div>
            </AccordionDetails>
        </Accordion>
    </div>
  )
}