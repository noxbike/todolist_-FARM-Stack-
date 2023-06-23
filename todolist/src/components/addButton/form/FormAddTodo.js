import React, { useState } from 'react'
import './formAddTodo.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { addTodolist } from '../../../features/todolist/todolistSlice';

export default function FormAddTodo(props) {
    const dispatch = useDispatch();
    const collectionUrl = useParams().collection || 'Work';
    const [list, setlist] = useState(collectionUrl)
    const collections = useSelector(state => state.collections.value);
    const [todo, setTodo] = useState({
        task: '',
        description: '',
        lists: collectionUrl,
        tag: '',
        when: dayjs(new Date()),
        complete: false
    })

    //Change the data in todo
    const handleChange = (value, key) => {
        let tab = todo;
        key ==='lists' && setlist(value);
        for(let item in tab){
            tab[item] = key === item && value;
        }
        setTodo(tab);
    };

    //add new tasks with redux dispatch without reloading the page
    //and close the modal window
    const onSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(addTodolist(todo));
        props.setOpen(false)
    }

    return (
        <div id='modalAdd'>
            <h2>Create a Todolist</h2>
            <Box onSubmit={onSubmit}
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '50ch' },
                }}
                noValidate
                autoComplete="off"
            >

                <TextField id="filled-basic" label="Task" variant="filled" onChange={ (e) => handleChange(e.target.value, 'task') } />
                <TextField id="filled-basic" label="Description" variant="filled" onChange={ (e) => handleChange(e.target.value, 'description') } />
                <TextField id="filled-basic" label="Tag" variant="filled" onChange={ (e) => handleChange(e.target.value, 'tag') }/>
                
                <InputLabel id="demo-simple-select-filled-label">Lists</InputLabel>
                
                <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={ list }
                    onChange={ event => handleChange(event.target.value, 'lists') }
                >
                    {
                        collections.map((list, index) => 
                            <MenuItem key={ index } value={ list.name }>{ list.name }</MenuItem>
                        )
                    }
                </Select>

                <LocalizationProvider dateAdapter={ AdapterDayjs }>
                    <DemoContainer
                        components={[
                        'DateTimePicker',
                        'MobileDateTimePicker',
                        ]}
                    >
                        <DemoItem label="Date">
                            <MobileDateTimePicker defaultValue={ todo.when } onChange={ (e) => handleChange(e, 'when') }/>
                        </DemoItem>
                    </DemoContainer>
                </LocalizationProvider>

                <div className='button'>
                    <button type="submit">Add</button>
                </div>

            </Box>
        </div>
    )
}