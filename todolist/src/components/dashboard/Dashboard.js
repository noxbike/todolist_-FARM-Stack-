import React from 'react'
import Menu from '../menu/Menu'
import { lists } from '../datatest'
import DropdownCollection from '../dropdownCollection/DropdownCollection'

export default function Dashboard() {
  return (
    <div id='dashboard'>
      <Menu/>
      <div className='title'>
        <h2>
          Dashboard
        </h2>
      </div>
      <div className='welcome'>
        <h1>Goodmorning</h1>
      </div>
      <div className='filter'>
        <div>DailyOverview</div>
        <div>Statistique</div>
      </div>
      <div className='todolist'>
        {lists.map(data => <DropdownCollection data={data}/>)}
      </div>
    </div>
  )
}
