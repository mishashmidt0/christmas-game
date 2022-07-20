import React from 'react';

import { v4 as uuidv4 } from 'uuid';

import { useAppSelector } from '../../../store/redux';
import { ReturnComponentType } from '../../../types';

import style from './FireLight.module.scss';

const maxLineFireLight = 9;

export const FireLight = (): ReturnComponentType => {
  const colorFireLight = useAppSelector(state => state.tree.fireLight);

  const createFireLight = (): (() => string[]) => {
    let startCount = 2;

    return (): string[] => {
      const arr = [];
      const raiseNumber = 2;

      startCount += raiseNumber;
      while (arr.length < startCount) {
        arr.push('*');
      }

      return arr;
    };
  };

  const arrFireLight = createFireLight();
  const arrLine = [];

  while (arrLine.length !== maxLineFireLight) {
    arrLine.push(maxLineFireLight);
  }

  return colorFireLight ? (
    <div className={style.FireLightContainer}>
      {arrLine.map(() => (
        <ul key={uuidv4()} className={style.FireLightContainer_ul}>
          {arrFireLight().map(() => (
            <li
              key={uuidv4()}
              className={`${style.FireLightContainer_ul_li} ${style[colorFireLight]}`}
            />
          ))}
        </ul>
      ))}
    </div>
  ) : (
    <div className={style.none} />
  );
};
