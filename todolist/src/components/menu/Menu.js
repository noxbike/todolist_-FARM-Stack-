import React from 'react'
import "./menu.css"
import Collections from '../collections/Collections'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PersonIcon from '@mui/icons-material/Person';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

const lists =[
    { name: 'work', color: 'green', icon: <MenuBookIcon/> },
    { name: 'personal', color: 'red', icon: <PersonIcon/>},
    { name: 'grocery', color: 'purple', icon: <LocalGroceryStoreIcon/>}
];

export default function Menu() {
  return (
    <div id="menu">
        <div className='container'>
            <h5>Collections</h5>
            {lists.map((data) => <Collections name={data.name} color={data.color} icon={data.icon}/>)}
        </div>
    </div>
  )
}
