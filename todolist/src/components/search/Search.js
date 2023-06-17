import React, { useState } from 'react'
import './search.css'
import SearchIcon from '@mui/icons-material/Search';
import BasicModal from '../modal/BasicModal';
import FormSearch from './formSearch/FormSearch';

export default function Search() {
  const [open, setOpen] = useState(false);
  return (
    <div id='Search'>
        <SearchIcon onClick={() => setOpen(true)}/>
        <BasicModal open={open} setOpen={setOpen} element={<FormSearch/>}/>
    </div>
  )
}
