import React from 'react'
import './cardCollection.css'

export default function CardCollection(props) {
  return (
    <div id='card-collection'>
        <div className="collection-icon" style={{background: `${props.data.color}`}}>
            {props.data.icon}
        </div>
        <div className='collection-bottom'>
            <h2>{props.data.name}</h2>
            <div className='collection-detail'>
                <p>1/3 done</p>
                <p>load</p>
            </div>
        </div>
    </div>
  )
}
