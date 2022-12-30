import React from 'react';
import DrawerContent from '../components/DrawerContent/HistoryDrawerContent';
import MapComponent from '../components/Map/MapComponent';
import DrawerLayout from '../layouts/DrawerLayout';

const MapPage = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <>
      <DrawerLayout
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        drawerContent={
          <DrawerContent
            mobileOpen={mobileOpen}
            handleDrawerOpen={setMobileOpen}></DrawerContent>
        }
        mainContent={<MapComponent></MapComponent>}></DrawerLayout>
    </>
  );
};

export default MapPage;
