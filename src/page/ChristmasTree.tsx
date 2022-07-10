import React from 'react';

import { ChooseTree } from '../components/Tree/t1-ChooseTree/ChooseTree';
import { SnowAudioComponent } from '../components/Tree/t2-SnowAndSound/SnowAudioComponent';
import { ChristmasTreeWall } from '../components/Tree/t3-ChristmasTreeWall/ChristmasTreeWall';
import { ChooseBg } from '../components/Tree/t4-ChooseBg/ChooseBg';
import { Toys } from '../components/Tree/t5-Toys/Toys';
import { ReturnComponentType } from '../types';

import style from './style/mainStyle.module.css';

export const ChristmasTree = (): ReturnComponentType => {
  return (
    <div className={style.ChristmasTree}>
      <div>
        <SnowAudioComponent />
        <ChooseTree />
        <ChooseBg />
      </div>

      <ChristmasTreeWall />
      <div>
        <Toys />
      </div>
    </div>
  );
};
