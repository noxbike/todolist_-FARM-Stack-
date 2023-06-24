import * as React from 'react';
import "./profile.css";
import Menu from '@mui/material/Menu';
import Fade from '@mui/material/Fade';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
const picture = "https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg";

export default function Profile() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div id='profile'>
      <Button
        id="fade-button"
        aria-controls={ open ? 'fade-menu' : undefined }
        aria-haspopup="true"
        aria-expanded={ open ? 'true' : undefined }
        onClick={ handleClick }
      >
        <img src={ picture } alt="profile"/>
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={ anchorEl }
        open={ open }
        onClose={ handleClose }
        TransitionComponent={ Fade}
      >
        <Link color={ 'inherit'} underline="none" href='/account'>
            <MenuItem onClick={ handleClose }>My account</MenuItem>
        </Link>
        <MenuItem onClick={ handleClose }>Logout</MenuItem>
      </Menu>
    </div>
  );
}