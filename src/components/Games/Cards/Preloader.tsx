import React from 'react';

import preloader from '../../../data/preloader.svg';
import { ReturnComponentType } from '../../../types';

import style from './styleCards.module.css';

export const Preloader = (): ReturnComponentType => {
  return (
    <div className={style.preloader}>
      <img src={preloader} alt="preloader" />
    </div>
  );
};
