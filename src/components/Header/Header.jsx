import React from 'react';
import './Header.css';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
const Header = ({
  drawer,
  drawerWidth,
  container,
  mobileOpen,
  handleDrawerToggle,
}) => {
  return (
    <>
      <AppBar
        position='fixed'
        sx={{
          width: { lg: `calc(100% - ${drawerWidth}px)` },
          ml: { lg: `${drawerWidth}px` },
        }}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <Typography variant='h4' noWrap component='div'>
            MapBox
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component='nav'
        sx={{ width: { lg: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label='mailbox folders'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={() => handleDrawerToggle(false)}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { lg: 'none', md: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}>
          {drawer}
        </Drawer>
        <Drawer
          variant='permanent'
          sx={{
            display: { md: 'none', lg: 'block', sm: 'none', xs: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open>
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Header;
