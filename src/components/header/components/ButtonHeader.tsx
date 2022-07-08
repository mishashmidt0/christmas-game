import React from 'react';

import AcUnitIcon from '@mui/icons-material/AcUnit';
import { Button, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { HeaderTitle, PATH } from '../../../enums/headerEnums';
import { ReturnComponentType } from '../../../types';

export const ButtonHeader = (): ReturnComponentType => {
  const navigate = useNavigate();

  return (
    <>
      <IconButton onClick={() => navigate('/')} color="inherit">
        <AcUnitIcon color="inherit" fontSize="large" />
      </IconButton>
      <Button onClick={() => navigate(PATH.Game)}>{HeaderTitle.game}</Button>
      <Button variant="text" color="inherit" onClick={() => navigate(PATH.ChristmasTree)}>
        {HeaderTitle.tree}
      </Button>
    </>
  );
};
