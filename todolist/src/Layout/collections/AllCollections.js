import React from 'react'
import "./AllCollection.css"
import AddIcon from '@mui/icons-material/Add';
import { lists } from "../../components/data/datatest.js";
import Path from '../../components/path/Path'
import CardCollection from '../../components/cardCollection/CardCollection';

export default function AllCollections() {
  return(
    <div id="AllCollections">
        <Path collection='Collections'/>
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
