import React, { useState } from 'react'
import "./top_bar.css"
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AddIcon from '@mui/icons-material/Add';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ArticleIcon from '@mui/icons-material/Article';
import Profile from './profile/Profile';
import BasicModal from '../modal/BasicModal';
import FormAddTodo from '../addButton/form/FormAddTodo'
import { Button } from '@mui/material';

export default function TopBar() {
    const [open, setOpen] = useState(false);
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
                <BasicModal open={open} setOpen={setOpen} element={<FormAddTodo setOpen={setOpen} />}/>
                <Button  onClick={() => setOpen(true)}>
                    <div className='addIcon'>
                        <AddIcon/>
                    </div>
                </Button>
                <Button>
                    <SearchIcon/>
                </Button>
                <Button>
                    <NotificationsNoneIcon/>
                </Button>
                <Profile/>
            </div>
        </div>
    )
}
