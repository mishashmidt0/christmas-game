import React from 'react';

import { useAppDispatch, useAppSelector } from '../../../store/redux';
import { ReturnComponentType } from '../../../types';
import { changeShowTree } from '../t8-slice/ChristmasTreeSlice-slice';

import style from './PopupTree.module.css';

export const PopupTree = (): ReturnComponentType => {
  const treeBase64 = useAppSelector(state => state.tree.showTree);
  const dispatch = useAppDispatch();
  const closeShowTree = (): void => {
    dispatch(changeShowTree(''));
  };

  return treeBase64 ? (
    <div
      role="presentation"
      className={style.popupTree}
      onClick={closeShowTree}
      onKeyPress={closeShowTree}
    >
      <img src={treeBase64} alt="tree" className={style.popupTreeImg} />
    </div>
  ) : (
    <div className={style.none} />
  );
};
