import React, {useState} from 'react'
import "./dashboard.css"
import Menu from '../../components/menu/Menu'
import { useSelector } from 'react-redux'
import DropdownCollection from '../../components/dropdownCollection/DropdownCollection'
import Path from '../../components/path/Path'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Statistique from '../../components/statistique/Statistique'
import Welcome from '../../components/welcome/Welcome'

export default function Dashboard() {
  const [component, setComponent] = useState(true)
  const lists = useSelector(state => state.list.value);
  return (
    <div id='dashboard'>
      <Menu/>
      <Path collection='Dashboard'/>
      <div className='welcome'>
        <Welcome/>
      </div>
      <div className='filter'>
      <Stack direction="row" spacing={1}>
        <Chip label="Daily Overview" variant={component === false ? "outlined": ""} sx={{borderRadius: '10px'}} onClick={() => setComponent(true)}/>
        <Chip label="Statistique" variant={component === true ? "outlined": ""} sx={{borderRadius: '10px'}} onClick={() => setComponent(false)}/>
      </Stack>
      </div>
      {component ? 
        <div className='todolist'>
        {lists.map(data => <DropdownCollection key={data.name} data={data}/>)}
      </div>: <Statistique/>
      }
      
    </div>
  )
}
