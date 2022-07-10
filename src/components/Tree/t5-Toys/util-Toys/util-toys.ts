import { v4 as uuidv4 } from 'uuid';

import { cardsType } from '../../../Games/slice/cardsSlice';

export const getToyUrl = (num: string): any => {
  /* eslint-disable global-require */
  return require(`../../../../data/assets/toys/${num}.png`); // eslint-disable-line
};

export const createArrToys = (toys: cardsType[]): any[] => {
  return toys
    .filter(toy => toy.isChosen)
    .map(toy => ({ url: getToyUrl(toy.num), id: uuidv4(), count: toy.count }));
};
