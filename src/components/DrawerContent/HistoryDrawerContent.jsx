import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Box } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { hideSearchMarker } from '../../redux/action/mapActions';
import {
  disableAllSearches,
  toggleAllSearches,
  toggleHistorySearch,
} from '../../redux/action/searchActions';
const DrawerContent = ({ handleDrawerOpen }) => {
  const dispatch = useDispatch();
  const history = useSelector((state) => state.search.searchHistory);

  const handleShowAllClick = () => {
    dispatch(toggleAllSearches());
    dispatch(hideSearchMarker());
  };

  const handleShowMarkerClick = (search, id) => {
    dispatch(toggleHistorySearch(search));
    dispatch(hideSearchMarker());
  };

  const handleDisableClick = () => {
    dispatch(disableAllSearches());
  };

  return (
    <>
      <Box display={'flex'}>
        <Typography variant='h4' noWrap component='div' sx={{ p: 2 }}>
          История поисков
        </Typography>
        <Button
          sx={{ display: { lg: 'none', md: 'block' } }}
          style={{ fontSize: 30 }}
          onClick={() => handleDrawerOpen(false)}>
          X
        </Button>
      </Box>
      {history?.length === 0 && (
        <Typography variant='h5' noWrap component='div' sx={{ p: 2 }}>
          История пуста :(
        </Typography>
      )}
      <List style={{ maxHeight: '100%', overflow: 'auto' }}>
        {history.map((address, id) => (
          <ListItem key={id}>
            <ListItemButton
              style={{
                backgroundColor: address.toggled ? 'lightgray' : 'white',
              }}
              onClick={() => handleShowMarkerClick(address, id)}>
              <ListItemText primary={address?.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Button style={{ height: '50px' }} onClick={() => handleShowAllClick()}>
        Показать все
      </Button>
      <Button style={{ height: '50px' }} onClick={() => handleDisableClick()}>
        Сбросить
      </Button>
    </>
  );
};

export default DrawerContent;
