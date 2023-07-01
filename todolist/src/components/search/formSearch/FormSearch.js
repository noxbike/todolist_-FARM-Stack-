import React, { useEffect, useState } from 'react'
import "./formSearch.css"
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Todolist from '../../todolist/Todolist';

export default function FormSearch() {
  const todolist = useSelector(state => state.todolist.value);
  const [todoFound, setTodoFound] = useState([])
  const [textSearch, setTextSearch] = useState("");

  //Search a todo from the search input
  //Using regex to test all todo that match the input
  useEffect(() => {
    let todoFoundBySearch = null;
    if(textSearch.length > 0){
      todoFoundBySearch = todolist.filter(todo => todo.task.toLowerCase().includes(textSearch.toLowerCase()) && !todo.complete)
    }
    return setTodoFound(todoFoundBySearch || todolist)
  },[todolist, textSearch]);

  return (
    <div id='formSearch'>
        <h2>
            Search
        </h2>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
        >
        <TextField id="filled-basic" label="Task" variant="filled" onChange={ (e) =>setTextSearch(e.target.value) } />
        <div className='data'>
          <Todolist done={ false } todolists={ todoFound }/>
        </div>
        </Box>

    </div>
  )
}
