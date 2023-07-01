import React from 'react'
import './collections.css'
export default function Collections(props) {
	const collection = props.collection
	return (
		<div id='collection'  style={{ background:`${ props.selected === collection.name ? '#12121297': "none" }` }}>
			<div>
				<div style={{ background: `${ collection.color }` }} className='icon'>
					{ collection.icon }
				</div>
				<p>{ collection.name }</p>
			</div>
		</div>
	)
}