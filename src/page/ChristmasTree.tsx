import React from 'react';

import { SnowAudioComponent } from '../components/Tree/SnowAndSound/SnowAudioComponent';
import { ReturnComponentType } from '../types';

import style from './style/mainStyle.module.css';

export const ChristmasTree = (): ReturnComponentType => {
  return (
    <div className={style.ChristmasTree}>
      <SnowAudioComponent />
    </div>
  );
};
