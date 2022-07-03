import React from 'react';

import AcUnitIcon from '@mui/icons-material/AcUnit';
import { Button, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const ButtonHeader = () => {
  const navigate = useNavigate();

  enum HeaderTitle {
    game = 'ИГРУШКИ',
    tree = 'ЁЛКА',
  }

  return (
    <>
      <IconButton onClick={() => navigate('/')} color="inherit">
        <AcUnitIcon color="inherit" fontSize="large" />
      </IconButton>
      <Button variant="text" color="inherit" onClick={() => navigate('/games')}>
        {HeaderTitle.game}
      </Button>
      <Button variant="text" color="inherit" onClick={() => navigate('/ChristmasTree')}>
        {HeaderTitle.tree}
      </Button>
    </>
  );
};
