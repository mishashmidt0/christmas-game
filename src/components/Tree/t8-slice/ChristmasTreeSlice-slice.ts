import { createSlice } from '@reduxjs/toolkit';

import InitTree from '../../../data/assets/tree/3.png';

const initialState: initialType = {
  isSnow: false,
  isSound: false,
  tree: InitTree,
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
  },
});

// action
export const { changeIsSnow, changeIsSound, changeTree } = ChristmasTreeSlice.actions;

// type
export type initialType = {
  isSnow: boolean;
  isSound: boolean;
  tree: string;
};
