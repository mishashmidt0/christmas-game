import { v4 as uuidv4 } from 'uuid';

import { treeArrType } from '../../t9-types/types';

export const getTreeUrl = (num: number): any => {
  /* eslint-disable global-require */
  return require(`../../../../data/assets/tree/${num}.png`); // eslint-disable-line
};

export const createArrTree = (): treeArrType[] => {
  let maxTree = 6;
  const treeArr: treeArrType[] = [];

  while (!(maxTree === 0)) {
    const url: string = getTreeUrl(maxTree);

    treeArr.push({ url, id: uuidv4() });
    maxTree -= 1;
  }

  return treeArr;
};
