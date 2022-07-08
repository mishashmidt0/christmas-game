import data from './data';

const ms = 2000;

export const CardsApi = {
  setCards() {
    return new Promise((res, rej) => {
      try {
        setTimeout(() => {
          res(data);
        }, ms);
      } catch (err) {
        rej(err);
      }
    });
  },
};
