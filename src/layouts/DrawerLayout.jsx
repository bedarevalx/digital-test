import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Header from '../components/Header/Header';

const DRAWER_WIDTH = 375;

function DrawerLayout({
  drawerContent,
  mainContent,
  window,
  mobileOpen,
  setMobileOpen,
}) {
  const handleDrawerToggle = (isShowing = !mobileOpen) => {
    setMobileOpen(isShowing);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header
        drawer={drawerContent}
        drawerWidth={DRAWER_WIDTH}
        container={container}
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}></Header>
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
        }}>
        <Toolbar />
        {mainContent}
      </Box>
    </Box>
  );
}

export default DrawerLayout;
