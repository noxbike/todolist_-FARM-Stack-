import React from 'react'
import './todolist.css'
import { day } from '../date/date'

export default function Todolist(props) {
  return (
    <div id='todolist'>
        {props.data && props.data.map( todo => 
            <div key={todo.name} className='todo'>
                <div style={{border:`4px solid ${props.color}`}} className='check'></div>
                {!props.done && 
                    <div className='detail'>
                        <p>{todo.task}</p>
                        <p className='hours'>{day(todo.when)}</p>
                    </div>
                }
                {props.done &&  
                    <div className='detail'>
                        <p>
                            <strike>{todo.task}</strike>
                        </p>
                        <p className='time'>{day(todo.when)}</p>
                    </div>
                }

            </div>
        )}
    </div>
  )
}
