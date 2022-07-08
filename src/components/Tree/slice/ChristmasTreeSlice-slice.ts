import { createSlice } from '@reduxjs/toolkit';

const initialState: initialType = {
  isSnow: false,
  isSound: false,
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
  },
});

// action
export const { changeIsSnow, changeIsSound } = ChristmasTreeSlice.actions;

// type
export type initialType = {
  isSnow: boolean;
  isSound: boolean;
};
