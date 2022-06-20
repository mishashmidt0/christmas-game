import { createSlice, Dispatch } from '@reduxjs/toolkit';
import { cardsApi } from '../api/cards-api';

const initialState: appType = {
  headerHidden: false,
  activeToys: 0,
};

//slice
const appSlice = createSlice({
  name: 'appSlice',
  initialState: initialState,
  reducers: {
    changeHeaderHidden(state, { payload: { value } }) {
      return { ...state, headerHidden: value };
    },
    changeActiveToys(state, { payload: { value } }) {
      return { ...state, activeToys: value };
    },
    resetIsActiveToys(state) {
      return { ...state, activeToys: 0 };
    },
  },
});
export default appSlice.reducer;

// action
export const { changeHeaderHidden, changeActiveToys, resetIsActiveToys } =
  appSlice.actions;

// type
export type appType = {
  headerHidden: boolean;
  activeToys: number;
};
