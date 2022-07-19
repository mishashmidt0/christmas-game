import React from 'react';

import { Button } from '@mui/material';
import html2canvas from 'html2canvas';
import { v4 as uuidv4 } from 'uuid';

import { useAppDispatch, useAppSelector } from '../../../store/redux';
import { ReturnComponentType } from '../../../types';
import {
  changeSaveTree,
  changeShowTree,
  clearSaveTree,
} from '../t8-slice/ChristmasTreeSlice-slice';

import style from './SaveTree.module.css';

export const SaveTree = (): ReturnComponentType => {
  const saveTreeArr = useAppSelector(state => state.tree.saveTree);

  const dispatch = useAppDispatch();

  const saveTree = (): void => {
    html2canvas(document.querySelector('#capture') as HTMLElement).then(tree => {
      dispatch(changeSaveTree(tree.toDataURL()));
    });
  };

  const showTree = (base64: string): void => {
    dispatch(changeShowTree(base64));
  };
  const clearTree = (): void => {
    dispatch(clearSaveTree());
  };

  return (
    <div className={style.SaveTree}>
      <div className={style.ButtonContainer}>
        <Button variant="contained" onClick={saveTree}>
          Сохранить Ёлку
        </Button>
        <Button variant="contained" onClick={clearTree}>
          Очистить список
        </Button>
      </div>

      <div id="saveTreeContainer" className={style.SaveTreeContainer}>
        {!!saveTreeArr.length &&
          saveTreeArr.map(base64 => (
            <img
              role="presentation"
              src={base64}
              className={style.canvasTree}
              alt="Tree"
              key={uuidv4()}
              onClick={() => showTree(base64)}
              onKeyPress={() => showTree(base64)}
            />
          ))}
      </div>
    </div>
  );
};
