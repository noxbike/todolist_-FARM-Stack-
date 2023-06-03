import React from 'react'
import './path.css'
import { Link } from 'react-router-dom'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function Path(props) {
  return (
    <div id='container-path'>
        <div id='title'>
            <div className='left'>
                    <div id='previous-button' hidden={props.collection === 'Dashboard'|| props.collection === 'Collections'}>
                        <Link to='/'><ArrowBackIosIcon/></Link>
                    </div>
                <h2>{props.collection} </h2>
            </div>
            <div className='right'>
                <MoreHorizIcon style={{color: "gray"}}/>
            </div>
        </div>
    </div>
  )
}
