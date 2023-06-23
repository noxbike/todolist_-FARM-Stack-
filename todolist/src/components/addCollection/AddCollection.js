import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import BasicModal from '../modal/BasicModal';
import FormAddCollection from './form/FormAddCollection';


export default function AddCollection() {
    const [open, setOpen] = useState(false);
  	return (
		<div>
			<div className='addbutton' onClick={() => setOpen(true)}>
				<AddIcon/>
			</div>
			<BasicModal open={ open } setOpen={ setOpen } element={ <FormAddCollection setOpen={ setOpen }/> }/>
		</div>
  )
}
