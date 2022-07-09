import React from 'react';

import { useAppSelector } from '../../../store/redux';
import { ReturnComponentType } from '../../../types';
import './ChristmasTreeWall.css';

export const ChristmasTreeWall = (): ReturnComponentType => {
  const treeUrl = useAppSelector(state => state.tree.tree);

  return (
    <div className="ChristmasTreeWall">
      <img src={treeUrl} alt="MainTree" />
    </div>
  );
};
