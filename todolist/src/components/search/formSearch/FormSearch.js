import React, { useEffect, useState } from 'react'
import "./formSearch.css"
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import Todolist from '../../todolist/Todolist';

export default function FormSearch() {
  const todolist = useSelector(state => state.todolist.value);
  const [data, setData] = useState([])
  const [textSearch, setTextSearch] = useState("");

  useEffect(() => {
    console.log(textSearch)
    let tab = [];
    if(textSearch.length > 0){
      let filterword = new RegExp(`${textSearch.toLowerCase()}`, 'g');
      todolist.filter(data => filterword.test(data.task.toLowerCase()) && !data.complete ? tab.push(data): false)
    }
    return setData(tab)
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
        <TextField id="filled-basic" label="Task" variant="filled" onChange={(e) =>setTextSearch(e.target.value)} />
        <div className='data'>
          <Todolist done={false} color={'blue'} data={data}/>
        </div>
        </Box>

    </div>
  )
}
