import React from 'react'
import "./AllCollection.css"
import AddIcon from '@mui/icons-material/Add';
import { lists } from "../../components/data/datatest.js";
import Path from '../../components/path/Path'
import CardCollection from '../../components/cardCollection/CardCollection';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function AllCollections() {
  return(
    <div id="AllCollections">
        <Path collection='Collections'/>
        <div className='filter'>
            <Stack direction="row" spacing={1}>
                <Chip label="Favorite" variant="outlined" sx={{borderRadius: '10px'}}/>
                <Chip label="All Collections" sx={{borderRadius: '10px'}}/>
            </Stack>
        </div>
        <div className='container'>
            {lists.map((data) => 
                <CardCollection key={data.name} data={data}/>
            )}
            <div className='addbutton'>
                <AddIcon/>
            </div>
        </div>
    </div>
  )
}
