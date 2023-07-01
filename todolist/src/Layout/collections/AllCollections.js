import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Path from '../../components/path/Path'
import CardCollection from '../../components/cardCollection/CardCollection';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import AddCollection from '../../components/addCollection/AddCollection';
import "./AllCollection.css"

export default function AllCollections() {
    const [favorite, setFavorite] = useState(false);
    const collections = useSelector(state => state.collections.value);

    return(
        <div id="AllCollections">
            <Path collection='Collections'/>
            <div className='filter'>
                <Stack direction="row" spacing={1}>
                    <Chip 
                        onClick={ () => setFavorite(true) } 
                        label="Favorite" 
                        variant={ `${!favorite && 'outlined'}` }
                        sx={{ borderRadius: '10px' }}
                    />
                    <Chip
                        onClick={ () => setFavorite(false) }
                        label="All Collections"
                        variant={ `${ favorite && 'outlined' }` }
                        sx={{ borderRadius: '10px' }}
                    />
                </Stack>
            </div>
            <div className='container'>
                { !favorite && collections.map((collection, index) => 
                    <CardCollection key={ index } collection={ collection }/>
                )}
                { favorite && collections.map((collection, index) => collection.favorite &&
                    <CardCollection key={ index } collection={ collection }/>
                )}
                { !favorite && <AddCollection/> }
            </div>
        </div>
    )
}
