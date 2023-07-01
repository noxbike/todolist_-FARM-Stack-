import React, { useState } from 'react'
import './formAddCollection.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import { addCollection } from '../../../features/collections/collectionsSlice';
import { useDispatch } from 'react-redux';

export default function FormAddCollection(props) {
    const dispatch = useDispatch();
    const [list, setList] = useState({ name: '', color: '#43da86', icon: <FolderOpenIcon/> });
    const [color, setColor] = useState("#43da86");

    //When user input change
    //Change the list
    const handleChange = (value, key) => {
        let copyList = list;
        copyList[key] = value;
        setColor(key === 'color' && value);
        setList(copyList);
    }

    //Add a new collection with redux dispatch without reloading page
    //And close the modal window
    const onSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(addCollection(list));
        props.setOpen(false)
    }

    return (
        <div>
            <div id='formAddCollection'>
                <h2>Create a list</h2>
                <Box onSubmit={ onSubmit }
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '50ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="filled-basic" label="Name" variant="filled" onChange={ (e) => handleChange(e.target.value, 'name') } />
                    <div className='inputColor'>
                        <label>Choose a color</label>
                        <div className='container-color'>
                            <input onChange={ (e) => handleChange(e.target.value, "color") } type="color" value={ color }/>
                        </div>
                    </div>
                    <div className='button'>
                        <button type="submit">Add</button>
                    </div>
                </Box>
            </div>
        </div>
    )
}