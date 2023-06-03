import React from 'react'
import "./dashboard.css"
import Menu from '../../components/menu/Menu'
import { lists } from '../../components/data/datatest'
import DropdownCollection from '../../components/dropdownCollection/DropdownCollection'
import Path from '../../components/path/Path'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function Dashboard() {
  return (
    <div id='dashboard'>
      <Menu/>
      <Path collection='Dashboard'/>
      <div className='welcome'>
        <h1>Goodmorning</h1>
      </div>
      <div className='filter'>
      <Stack direction="row" spacing={1}>
        <Chip label="Daily Overview" />
        <Chip label="Statistique" variant="outlined" />
      </Stack>
      </div>
      <div className='todolist'>
        {lists.map(data => <DropdownCollection key={data.name} data={data}/>)}
      </div>
    </div>
  )
}
