import { createSlice } from '@reduxjs/toolkit';

import InitBg from '../../../data/assets/bg/3.jpg';
import InitTree from '../../../data/assets/tree/3.png';

const initialState: initialType = {
  isSnow: false,
  isSound: false,
  tree: InitTree,
  bg: InitBg,
};

export const ChristmasTreeSlice = createSlice({
  name: 'ChristmasTreeSlice',
  initialState,
  reducers: {
    changeIsSnow(state, { payload }) {
      return { ...state, isSnow: payload };
    },
    changeIsSound(state, { payload }) {
      return { ...state, isSound: payload };
    },
    changeTree(state, { payload }) {
      return { ...state, tree: payload };
    },
    changeBg(state, { payload }) {
      return { ...state, bg: payload };
    },
  },
});

// action
export const { changeIsSnow, changeIsSound, changeTree, changeBg } =
  ChristmasTreeSlice.actions;

// type
export type initialType = {
  isSnow: boolean;
  isSound: boolean;
  tree: string;
  bg: string;
};
