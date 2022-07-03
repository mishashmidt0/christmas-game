import React, { useEffect } from 'react';

import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import style from './style/mainStyle.module.css';

export const Main = React.memo(() => {
  const navigate = useNavigate();

  useEffect(() => {
    const app = document.querySelector('.App');

    if (app) app.classList.add('hidden');

    return () => {
      if (app) app.classList.remove('hidden');
    };
  });

  return (
    <div className={style.containerMain}>
      <div className={style.cardMain}>
        <Typography
          variant="subtitle2"
          display="block"
          gutterBottom
          fontSize="34px"
          fontWeight="bold"
          color="white"
        >
          Новогодняя игра!
        </Typography>
        <Typography
          variant="subtitle2"
          display="block"
          gutterBottom
          fontSize="34px"
          fontWeight="bold"
          color="white"
        >
          «Наряди ёлку»
        </Typography>
      </div>
      <Button variant="contained" onClick={() => navigate('/games')}>
        Играть
      </Button>
    </div>
  );
});
