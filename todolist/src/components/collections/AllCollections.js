import React from 'react'
import "./AllCollection.css"
import AddIcon from '@mui/icons-material/Add';
import { lists } from "../datatest.js";

export default function AllCollections() {
  return(
    <div id="AllCollections">
        <h2>Collections</h2>
        <div className='container'>
            {lists.map((data) => 
                <div className='card-collection'>
                    <div className="collection-icon" style={{background: `${data.color}`}}>
                        {data.icon}
                    </div>
                    <div className='collection-bottom'>
                        <h2>{data.name}</h2>
                        <div className='collection-detail'>
                            <p>1/3 done</p>
                            <p>load</p>
                        </div>
                    </div>
                </div>
            )}
            <div className='addbutton'>
                <AddIcon/>
            </div>
        </div>
    </div>
  )
}
