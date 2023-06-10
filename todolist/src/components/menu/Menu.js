import React from 'react'
import "./menu.css"
import Collections from './Collections'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Menu(props) {
  const lists = useSelector(state => state.list.value);
  return (
    <div id="menu">
        <div className='container'>
            <h5>Collections</h5>
            {lists.map((data) => 
              <Link key={data.name} to={`/collection/${data.name}` }>
                <Collections selected={props.selected} name={data.name} color={data.color} icon={data.icon}/>
              </Link>
            )}
        </div>
    </div>
  )
}
