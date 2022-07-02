export const setImage = (num: string): any => {
  /* eslint-disable global-require */
  return require(`../../../data/assets/toys/${num}.png`); // eslint-disable-line import/no-dynamic-require
};
