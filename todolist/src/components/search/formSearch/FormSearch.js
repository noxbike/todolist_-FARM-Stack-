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
    let tab = [];
    if(textSearch.length > 0){
      let filterword = new RegExp(`${textSearch.toLowerCase()}`, 'g');
      todolist.filter(todo => filterword.test(todo.task.toLowerCase()) && !todo.complete ? tab.push(todo): false)
    }
    return setTodoFound(tab)
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
