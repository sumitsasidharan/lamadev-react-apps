import { AppBar, Avatar, Badge, styled, Toolbar, Typography, Box, Menu, MenuItem } from '@mui/material'
import PetsIcon from '@mui/icons-material/Pets';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import profileImage from '../assets/images/avatar/4.jpg';

import { InputBase } from '@mui/material';
import { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
   display: 'flex',
   justifyContent: 'space-between'
})

const Search = styled("div")(({theme}) => ({
   backgroundColor: "white",
   padding: "0 10px",
   borderRadius: theme.shape.borderRadius,
   width: "40%"
}))

const Icons = styled(Box)(({ theme }) => ({
   display: 'none',
   alignItems: 'center',
   gap: '20px',
   [theme.breakpoints.up("sm")]: {
      display: "flex"
   }
}));

const UserBox = styled(Box)(({ theme }) => ({
   display: 'flex',
   alignItems: 'center',
   gap: '10px',
   [theme.breakpoints.up('sm')]: {
      display: 'none',
   },
}));

const Navbar = () => {
   const [anchorEl, setAnchorEl] = useState(null);
   const open = Boolean(anchorEl);
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
   };

  return (
     <AppBar position="sticky">
        <StyledToolbar>
           <Typography
              variant="h6"
              sx={{ display: { xs: 'none', sm: 'block' } }}>
              LOGO
           </Typography>
           <PetsIcon sx={{ display: { xs: 'block', sm: 'none' } }} />

           <Search>
              <InputBase placeholder="search..." />
           </Search>

           <Icons>
              <Badge badgeContent={4} color="error">
                 <MailIcon />
              </Badge>
              <Badge badgeContent={4} color="error">
                 <NotificationsIcon />
              </Badge>

              <Avatar
                 sx={{ width: 30, height: 30 }}
                 alt="Remy Sharp"
                 src={profileImage}
                 onClick={handleClick}
              />
           </Icons>

           <UserBox onClick={handleClick}>
              <Avatar
                 sx={{ width: 30, height: 30 }}
                 alt="Remy Sharp"
                 src={profileImage}
              />
              <Typography variant="span">John Doe</Typography>
           </UserBox>
        </StyledToolbar>

        <Menu
           id="demo-positioned-menu"
           aria-labelledby="demo-positioned-button"
           anchorEl={anchorEl}
           open={open}
           onClose={handleClose}
           anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
           }}
           transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
           }}>
           <MenuItem onClick={handleClose}>Profile</MenuItem>
           <MenuItem onClick={handleClose}>My account</MenuItem>
           <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
     </AppBar>
  );
}

export default Navbar