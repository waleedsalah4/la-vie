import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Tooltip from '@mui/material/Tooltip';


import avatar from '../../assests/notifi/Avatar.png';
import avatar1 from '../../assests/notifi/avatar1.png';
import avatar2 from '../../assests/notifi/avatar2.png';

export default function Notification() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>

        <Tooltip title="Notifications">
          <Badge 
                badgeContent={4} 
                color="error" 
                onClick={handleClick}
                aria-controls={open ? 'notifications' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
            >
            <NotificationsNoneIcon color="action" />
        </Badge>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="notifications"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
            <h6 className='font-Poppins'>
                Notifications
            </h6>
        </MenuItem>
        <MenuItem>
            <div className='flex justify-start'>
                    <Avatar 
                        alt="user pic"
                        src={avatar}
                        sx={{ width: 24, height: 24 }}
                    /> 
                <div className='flex flex-col gap-y-2'>
                    <p>Joy Arnold left 6 comments on Your Post</p>
                    <Typography  variant='caption' className='text-blogText'>Yesterday at 11:42 PM</Typography>
                </div>
                
            </div>
        </MenuItem>
        <Divider />
        <MenuItem>
        <div className='flex justify-start'>
            <Avatar 
                alt="user pic"
                src={avatar1}
                sx={{ width: 24, height: 24 }}
            />
            <div className='flex flex-col gap-y-2'>
                <p>Dennis Nedry commented on Isla compliance report</p>    
                <Typography variant='caption' className='text-blogText'>Yesterday at 5:42 PM</Typography>
            </div>
        </div>
        </MenuItem>
        <Divider />
        <MenuItem>
            <div className='flex justify-start'>
                <Avatar 
                    alt="user pic"
                    src={avatar2}
                    sx={{ width: 24, height: 24 }}
                /> 
                <div className='flex flex-col gap-y-2'>
                <p>John created Isla SOC2 compliance report</p> 
                    <Typography variant='caption'>Wednesday at 11:15 AM</Typography>
                </div>
                 
            </div>
            
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
