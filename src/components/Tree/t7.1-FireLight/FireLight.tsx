import React from 'react';

import { v4 as uuidv4 } from 'uuid';

import { ReturnComponentType } from '../../../types';

import style from './FireLight.module.css';

const maxLineFireLight = 9;

export const FireLight = (): ReturnComponentType => {
  const createFireLight = (): (() => string[]) => {
    let startCount = 3;

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

  return (
    <div className={style.FireLightContainer}>
      {arrLine.map(() => (
        <ul key={uuidv4()} className={style.FireLightContainer_ul}>
          {arrFireLight().map(el => (
            <li key={uuidv4()}>{el}</li>
          ))}
        </ul>
      ))}
    </div>
  );
};
