import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import Menu from '../../components/menu/Menu'
import Welcome from '../../components/welcome/Welcome'
import DropdownCollection from '../../components/dropdownCollection/DropdownCollection'
import Path from '../../components/path/Path'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Statistique from '../../components/statistique/Statistique'
import "./dashboard.css"

export default function Dashboard() {
	const [component, setComponent] = useState(true)
	const collections = useSelector(state => state.collections.value);

	return (
		<div id='dashboard'>
		<Menu/>
		<Path collection='Dashboard'/>
		<div className='welcome'>
			<Welcome/>
		</div>
		<div className='filter'>
		<Stack direction="row" spacing={ 1 }>
			<Chip
				label="Daily Overview"
				variant={ component === false ? "outlined": "" }
				sx={{ borderRadius: '10px' }}
				onClick={ () => setComponent(true) }
			/>
			<Chip 
				label="Statistique"
				variant={ component === true ? "outlined": "" }
				sx={{ borderRadius: '10px' }}
				onClick={ () => setComponent(false) }
			/>
		</Stack>
		</div>
		{ component ? 
			<div className='todolist'>
				{ collections.map(collection => 
					<DropdownCollection
						key={ collection.name }
						collection={ collection }
					/>
				)}
			</div> : <Statistique/>
		}
		
		</div>
	)
}