import { v4 as uuidv4 } from 'uuid';

import snow from '../../../data/assets/svg/snow.svg';

export type Snow = {
  id: string;
  url: string;
  fontSize: string;
  animationDuration: string;
  animationDelay: string;
};
const snowArr: Snow[] = [];

const max = 30;

for (let i = 0; i < max; i += 1) {
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
const floatStart = 0.4;
const floatEnd = 2.2;
const integerStart = 20;
const integerEnd = 35;
const animation = 2;

export const snowflakes = snowArr.map(snow => ({
  ...snow,
  fontSize: `${getRndFloat(floatStart, floatEnd)}em`,
  animationDuration: `${getRndInteger(integerStart, integerEnd)}s`,
  animationDelay: `${getRndInteger(-1, snowArr.length / animation)}s`,
}));

export const changeSnowAnimation = (animationName: string, snow: HTMLElement): void => {
  snow.style.setProperty('--animation-name', animationName);
};
