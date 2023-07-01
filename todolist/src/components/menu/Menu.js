import React from 'react'
import "./menu.css"
import Collections from './Collections'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Menu(props) {
	const collections = useSelector(state => state.collections.value);
	
	return (
		<div id="menu">
			<div className='container'>
				<h5>Collections</h5>
				{ collections.map((collection) => 
					<Link key={ collection.name } to={ `/collection/${ collection.name }` }>
						<Collections selected={ props.selected } collection={ collection }/>
					</Link>
				)}
			</div>
		</div>
	)
}
