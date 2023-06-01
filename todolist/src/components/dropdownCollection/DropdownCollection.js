import React, { useState } from 'react'
import "./dropdownCollection.css"
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function DropdownCollection(props) {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <div className='Accordion'>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
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
                <div>hey</div>
                <div>hey</div>
                <div>hey</div>
                <div>hey</div>
            </AccordionDetails>
        </Accordion>
    </div>
  )
}
