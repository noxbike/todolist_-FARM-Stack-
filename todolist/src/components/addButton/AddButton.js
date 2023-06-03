import React from 'react'
import "./addButton.css"
import AddIcon from '@mui/icons-material/Add';

export default function AddButton() {
  return (
    <div id='addButton'>
        <div className='icon'>
            <AddIcon/>    
        </div>
        <h4>Add a task</h4>
    </div>
  )
}
