import React, { useState } from 'react'
import "./AllCollection.css"
import Path from '../../components/path/Path'
import CardCollection from '../../components/cardCollection/CardCollection';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import AddCollection from '../../components/addCollection/AddCollection';
import { useSelector } from 'react-redux';

export default function AllCollections() {
    const [favorite, setFavorite] = useState(false);
    const lists = useSelector(state => state.list.value);
  return(
    <div id="AllCollections">
        <Path collection='Collections'/>
        <div className='filter'>
            <Stack direction="row" spacing={1}>
                <Chip onClick={() => setFavorite(true)} label="Favorite" variant={`${!favorite && 'outlined'}`} sx={{borderRadius: '10px'}}/>
                <Chip onClick={() => setFavorite(false)} label="All Collections" variant={`${favorite && 'outlined'}`}sx={{borderRadius: '10px'}}/>
            </Stack>
        </div>
        <div className='container'>
            {!favorite && lists.map((data) => 
                <CardCollection key={data.name} data={data}/>
            )}
            {favorite && lists.map((data) => data.favorite &&
                <CardCollection key={data.name} data={data}/>
            )}
            {!favorite && <AddCollection/>}
        </div>
    </div>
  )
}
