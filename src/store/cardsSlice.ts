import { createSlice, Dispatch } from '@reduxjs/toolkit';

import { cardsApi } from '../api/cards-api';

const initialState: cardsType[] = [];

// slice
const cardsSlice = createSlice({
  name: 'cardsSlice',
  initialState,
  reducers: {
    setCards(state, { payload }) {
      return payload.state.map((c: dataType) => ({ ...c, isChosen: false }));
    },
    chosenCard(state, { payload: { id, value } }) {
      return state.map((c: cardsType) => (c.num === id ? { ...c, isChosen: value } : c));
    },
    resetActiveCards(state) {
      return state.map((c: cardsType) => ({ ...c, isChosen: false }));
    },
  },
});

export default cardsSlice.reducer;

// action
export const { setCards, chosenCard, resetActiveCards } = cardsSlice.actions;

// thunk
export const setCardsTC = () => (dispatch: Dispatch<any>) => {
  cardsApi.setCards().then(res => {
    dispatch(setCards({ state: res }));
  });
};

// type
export type dataType = {
  num: string;
  name: string;
  count: string;
  year: string;
  shape: string;
  color: string;
  size: string;
  favorite: boolean;
};
export type isChosenType = { isChosen: boolean };
export type cardsType = dataType & isChosenType;

export type keyDataType = keyof dataType;
