import { Box, Button, Typography } from '@mui/material';

const PopupAddressInfo = ({ address, setIsPopupVisible }) => {
  return (
    <Box>
      <>
        <Typography>{address}</Typography>
        <Box display={'flex'} justifyContent={'center'}>
          <Button onClick={() => setIsPopupVisible(false)}>Закрыть</Button>
        </Box>
      </>
    </Box>
  );
};

export default PopupAddressInfo;
