import React from 'react';

import { useAppSelector } from '../../../store/redux';
import { ReturnComponentType } from '../../../types';

import style from './ChristmasTreeWall.module.css';

export const ChristmasTreeWall = (): ReturnComponentType => {
  const treeUrl = useAppSelector(state => state.tree.tree);
  const urlBg = useAppSelector(state => state.tree.bg);

  return (
    <div className={style.ChristmasTreeWall} style={{ backgroundImage: `url(${urlBg})` }}>
      <img src={treeUrl} alt="MainTree" />
    </div>
  );
};
