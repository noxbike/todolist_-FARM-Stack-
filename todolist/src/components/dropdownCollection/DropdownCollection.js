import React, { useState } from 'react'
import "./dropdownCollection.css"
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom'
import { todo } from '../data/datatest'

export default function DropdownCollection(props) {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <div id='Accordion'>
        <Accordion className='container' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            >
                <Typography className='head-accordion' sx={{ width: '33%', flexShrink: 0 }}>
                    <div className="icon-collection" style={{background: `${props.data.color}`}}>{props.data.icon}</div>{props.data.name}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <div className='todo-list'>
                    
                    {todo.map(data => data.lists === props.data.name && 
                        <div>
                            <div className='check' style={{border: `2px solid ${props.data.color}`}}></div>
                            <div className='detail'>
                                <p className='task'>{data.task}</p>
                                <p className='hours'>Today 13:06</p>
                            </div>
                        </div>
                    )}
                    
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
