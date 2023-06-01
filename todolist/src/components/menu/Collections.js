import React from 'react'
import './collections.css'
export default function Collections(props) {
  return (
    <div id='collection'>
        <div style={{background: `${props.color}`}} className='icon'>
            {props.icon}
        </div>
        <p>{props.name}</p>
    </div>
  )
}
