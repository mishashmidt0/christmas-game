import React from 'react';

import { ChooseTree } from '../components/Tree/t1-ChooseTree/ChooseTree';
import { SnowAudioComponent } from '../components/Tree/t2-SnowAndSound/SnowAudioComponent';
import { ChristmasTreeWall } from '../components/Tree/t3-ChristmasTreeWall/ChristmasTreeWall';
import { ReturnComponentType } from '../types';

import style from './style/mainStyle.module.css';

export const ChristmasTree = (): ReturnComponentType => {
  return (
    <div className={style.ChristmasTree}>
      <div>
        <SnowAudioComponent />
        <ChooseTree />
      </div>

      <ChristmasTreeWall />
    </div>
  );
};
