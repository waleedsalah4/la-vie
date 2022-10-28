import React from 'react';
import { useNavigate } from 'react-router-dom';
import Notification from './Notification';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import userAvatar from '../../assests/home/avatar.png';
import logo from '../../assests/logo.png';
import HeaderLinks from './HeaderLinks';

function Header() { 
    const [openMenu, setOpenMenu] = React.useState<boolean>(false)
    const navigate = useNavigate()

    const goToSignPage = () => {
        navigate('/signup')
    }
    const goToCartPage = () => {
        navigate('/cart')
    }
    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }
  return (
    <header className='flex justify-between items-center p-4'>
        <div className='flex relative font-Meddon text-3xl'>
            La Vie <img src={logo} className='absolute left-10 top-0' alt='logo' /> 
        </div>
        <div className='hidden sm:flex gap-y-1 gap-x-8'>
            <HeaderLinks />
        </div>
        <div className='flex items-center gap-x-5'>
            <Badge badgeContent={4} color='error'>
                <ShoppingCartIcon color="action" className='cursor-pointer' onClick={goToCartPage}/>
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
        <div className='relative block sm:hidden' onClick={handleOpenMenu}>
            <IconButton aria-label='menu-icon'>
                <MenuIcon />
            </IconButton>
            {openMenu && <div className="absolute top-10 right-0 z-10 rounded-sm">
                <div className='flex flex-col gap-y-1 gap-x-8 bg-footer p-4'>
                    <HeaderLinks />
                </div>
            </div>}
        </div>
    </header>
  );
}

export default Header

