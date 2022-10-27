import * as React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import userAvatar from '../../assests/home/avatar.png';
import { red } from '@mui/material/colors';

import Notification from './Notification';
import logo from '../../assests/logo.png';
import classes from '../../styles/ui/Header.module.css';

const color = red[500];

function Header() { 
    const navigate = useNavigate()

    const goToSignPage = () => {
        navigate('/signup')
    }
  return (
    <header className={classes.header}>
        <div className={classes.logo}>
            La Vie <img src={logo}className={classes.logoImg} alt='logo' /> 
        </div>
        <div className={classes.links}>
            <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? `${classes.active} ${classes.link}` : classes.link} 
                end
            >
                Home
            </NavLink>
            <NavLink 
                to='/shop'
                className={({ isActive }) => isActive ? `${classes.active} ${classes.link}` : classes.link}  
            >
                Shop
            </NavLink>
            <NavLink 
                to='/blog'
                className={({ isActive }) => isActive ? `${classes.active} ${classes.link}` : classes.link}  
            >
                Blog
            </NavLink>
            <NavLink 
                to='/about' 
                className={({ isActive }) => isActive ? `${classes.active} ${classes.link}` : classes.link} 
            >
                About</NavLink>
            <NavLink 
                to='/community' 
                className={({ isActive }) => isActive ? `${classes.active} ${classes.link}` : classes.link} 
            >
                community
            </NavLink>
        </div>
        <div className='flex items-center gap-x-5'>
        <Badge badgeContent={4} color='error'>
            <ShoppingCartIcon color="action" />
        </Badge>
        {/* <Badge badgeContent={4} color="error">
            <NotificationsNoneIcon color="action" />
        </Badge> */}
        <Notification />
        <Avatar
            alt="user pic"
            src={userAvatar}
            sx={{ width: 24, height: 24 }}
        />
            {/* <button className={classes.signBtn} onClick={goToSignPage}>Sign Up</button> */}
        </div>
    </header>
  );
}

export default Header


