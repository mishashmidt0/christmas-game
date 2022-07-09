import { v4 as uuidv4 } from 'uuid';

import { treeArrType } from '../../t9-types/types';

export const getBgUrl = (num: number): any => {
  /* eslint-disable global-require */
  return require(`../../../../data/assets/bg/${num}.jpg`); // eslint-disable-line
};

export const createArrBg = (): treeArrType[] => {
  let maxBg = 10;
  const bgArr: treeArrType[] = [];

  while (!(maxBg === 0)) {
    const url: string = getBgUrl(maxBg);

    bgArr.push({ url, id: uuidv4() });
    maxBg -= 1;
  }

  return bgArr;
};
