import React from 'react';

import { Cards } from '../components/Games/Cards/Cards';
import { FiltersContainer } from '../components/Games/Filter/FiltersContainer';

import style from './style/mainStyle.module.css';

export const Games = React.memo(() => {
  return (
    <div className={style.gamesContainer}>
      <FiltersContainer />
      <Cards />
    </div>
  );
});
