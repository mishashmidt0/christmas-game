import React from 'react';

import { ChooseTree } from '../components/Tree/t1-ChooseTree/ChooseTree';
import { SnowAudioComponent } from '../components/Tree/t2-SnowAndSound/SnowAudioComponent';
import { ChristmasTreeWall } from '../components/Tree/t3-ChristmasTreeWall/ChristmasTreeWall';
import { ChooseBg } from '../components/Tree/t4-ChooseBg/ChooseBg';
import { Toys } from '../components/Tree/t5-Toys/Toys';
import { SaveTree } from '../components/Tree/t6-SaveTree/SaveTree';
import { PopupTree } from '../components/Tree/t7-PopupTree/PopupTree';
import { ReturnComponentType } from '../types';

import style from './style/mainStyle.module.css';

export const ChristmasTree = (): ReturnComponentType => {
  return (
    <div className={style.ChristmasTree}>
      <PopupTree />
      <div>
        <SnowAudioComponent />
        <ChooseTree />
        <ChooseBg />
      </div>

      <ChristmasTreeWall />
      <div>
        <Toys />
        <SaveTree />
      </div>
    </div>
  );
};
