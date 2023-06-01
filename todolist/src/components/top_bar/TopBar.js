import React from 'react'
import "./top_bar.css"
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AddIcon from '@mui/icons-material/Add';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ArticleIcon from '@mui/icons-material/Article';
const picture = "https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg";

export default function TopBar() {
  return (
    <div id='top_bar'>
        <div className='left'>
            <MenuOutlinedIcon/>
            <Link to="/" className='textIcon'>
                <DashboardIcon/>
                dashboard
            </Link>
            <Link to="/collections" className='textIcon'>
                <ArticleIcon/>
                collections
            </Link>
        </div>
        <div className='right'>
            <div className='addIcon'>
                <AddIcon/>
            </div>
            <SearchIcon/>
            <NotificationsNoneIcon/>
            <div className='picture'>
                <img src={picture} alt="profile"/>
            </div>
        </div>
    </div>
  )
}
