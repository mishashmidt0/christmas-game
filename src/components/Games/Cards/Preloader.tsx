import React from 'react';
import preloader from '../../../data/preloader.svg';
import style from './styleCards.module.css';

export const Preloader = () => {
  return (
    <div className={style.preloader}>
      <img src={preloader} alt="preloader" />
    </div>
  );
};
