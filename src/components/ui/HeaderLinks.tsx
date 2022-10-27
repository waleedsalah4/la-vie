import React from 'react';
import { NavLink } from 'react-router-dom';

function HeaderLinks() {
    return (
        <>
            <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? `text-green no-underline` : 'no-underline'} 
                end
            >
                Home
            </NavLink>
            <NavLink 
                to='/shop'
                className={({ isActive }) => isActive ? `text-green no-underline` : 'no-underline'}  
            >
                Shop
            </NavLink>
            <NavLink 
                to='/blog'
                className={({ isActive }) => isActive ? `text-green no-underline` : 'no-underline'}  
            >
                Blog
            </NavLink>
            <NavLink 
                to='/about' 
                className={({ isActive }) => isActive ? `text-green no-underline` : 'no-underline'} 
            >
                About</NavLink>
            <NavLink 
                to='/community' 
                className={({ isActive }) => isActive ? `text-green no-underline` : 'no-underline'} 
            >
                community
            </NavLink>
        </>
    )
}

export default HeaderLinks