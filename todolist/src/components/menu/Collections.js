import React from 'react'
import './collections.css'
export default function Collections(props) {
  return (
    <div id='collection'  style={{background:`${props.selected === props.name ? '#12121297': "none"}`}}>
      <div>
        <div style={{background: `${props.color}`}} className='icon'>
            {props.icon}
        </div>
        <p>{props.name}</p>
      </div>
    </div>
  )
}
