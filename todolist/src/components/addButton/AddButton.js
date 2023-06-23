import React, { useState } from 'react'
import "./addButton.css"
import AddIcon from '@mui/icons-material/Add';
import FormAddTodo from './form/FormAddTodo';
import BasicModal from '../modal/BasicModal';

export default function AddButton() {
    const [open, setOpen] = useState(false);

    return (
        <div id='addButton'>
            <div className='button' onClick={ () => setOpen(true) }>
                <div className='icon'>
                    <AddIcon/>    
                </div>
                <h4>Add a task</h4>  
            </div>
            <BasicModal open={ open } setOpen={ setOpen } element={ <FormAddTodo setOpen={ setOpen }/> } />
        </div>
    )
}