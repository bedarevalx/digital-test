import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addSearchHistory } from '../../redux/action/searchActions';

const PopupReverseGeocoding = ({ address, setIsPopupVisible }) => {
  const dispatch = useDispatch();
  const handleSaveClick = () => {
    dispatch(
      addSearchHistory({
        name: address.place_name,
        lng: address.geometry.coordinates[1],
        lat: address.geometry.coordinates[0],
        toggled: false,
      }),
    );
    setIsPopupVisible(false);
  };
  return (
    <Box>
      {address?.place_name ? (
        <>
          <Typography>{address.place_name}</Typography>
          <Box display={'flex'} justifyContent={'space-between'}>
            <Button onClick={() => handleSaveClick()}>Сохранить</Button>
            <Button
              color={'secondary'}
              onClick={() => setIsPopupVisible(false)}>
              Отмена
            </Button>
          </Box>
        </>
      ) : (
        <>
          <Typography>{'Ничего не найдено :('}</Typography>
          <Button onClick={() => setIsPopupVisible(false)}>Закрыть</Button>
        </>
      )}
    </Box>
  );
};

export default PopupReverseGeocoding;
