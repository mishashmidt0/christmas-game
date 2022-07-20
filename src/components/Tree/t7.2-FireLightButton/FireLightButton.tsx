import React from 'react';

import { Button, Switch } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../../store/redux';
import { ReturnComponentType } from '../../../types';
import { addedTheNumberOfOneToy } from '../../Games/slice/cardsSlice';
import {
  changeFireLight,
  changeIsSwitch,
  clearToyOnTheTree,
} from '../t8-slice/ChristmasTreeSlice-slice';

import style from './FireLightButton.module.scss';

export const FireLightButton = (): ReturnComponentType => {
  const dispatch = useAppDispatch();
  const isSwitch = useAppSelector(state => state.tree.isSwitch);
  const toysOnTheTree = useAppSelector(state => state.tree.toysOnTheTree);

  const onFireLight = (color: string): void => {
    dispatch(changeIsSwitch(true));
    dispatch(changeFireLight(color));
  };
  const changeSwitch = (): void => {
    // eslint-disable-next-line no-unused-expressions
    isSwitch ? dispatch(changeFireLight('')) : dispatch(changeFireLight('multicolor'));
    dispatch(changeIsSwitch(!isSwitch));
  };
  const clearTree = (): void => {
    toysOnTheTree.forEach(toy => dispatch(addedTheNumberOfOneToy(toy.num)));
    dispatch(clearToyOnTheTree());
  };
  const createButton = (color: string): ReturnComponentType => {
    return (
      <button
        type="button"
        aria-label="fireLight"
        className={`${style.Button} ${style[color]}`}
        onClick={() => onFireLight(color)}
        onKeyPress={() => onFireLight(color)}
      />
    );
  };
  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  return (
    <div className={style.FireLightButtonContainer}>
      <h2 className={style.headerTitle}>Гирлянда</h2>
      <div className={style.buttonContainer}>
        {createButton('multicolor')}
        {createButton('red')}
        {createButton('blue')}
        {createButton('yellow')}
        {createButton('green')}
        <Switch {...label} color="warning" checked={isSwitch} onChange={changeSwitch} />
      </div>
      <Button variant="contained" onClick={clearTree}>
        Убрать игрушки
      </Button>
    </div>
  );
};
