import * as React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assests/logo.png'
import classes from '../../styles/ui/Header.module.css';


function Header() { 

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
        <div>
            <button className={classes.signBtn}>Sign Up</button>
        </div>
    </header>
  );
}

export default Header


