import { v4 as uuidv4 } from 'uuid';

import snow from '../../../../data/assets/svg/snow.svg';
import {
  animation,
  floatEnd,
  floatStart,
  integerEnd,
  integerStart,
  maxSnow,
} from '../../constant/constant';
import { Snow } from '../../types/types';

const snowArr: Snow[] = [];

for (let i = 0; i < maxSnow; i += 1) {
  snowArr.push({
    id: uuidv4(),
    url: snow,
    fontSize: '',
    animationDuration: '',
    animationDelay: '',
  });
}
export const getRndInteger = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRndFloat = (min: number, max: number): number => {
  return +(Math.random() * (max - min) + min).toFixed(1);
};

export const snowflakes = snowArr.map(snow => ({
  ...snow,
  fontSize: `${getRndFloat(floatStart, floatEnd)}em`,
  animationDuration: `${getRndInteger(integerStart, integerEnd)}s`,
  animationDelay: `${getRndInteger(-1, snowArr.length / animation)}s`,
}));

export const changeSnowAnimation = (animationName: string, snow: HTMLElement): void => {
  snow.style.setProperty('--animation-name', animationName);
};
