import React from 'react'
import "./menu.css"
import Collections from './Collections'
import {lists} from '../datatest.js';

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
