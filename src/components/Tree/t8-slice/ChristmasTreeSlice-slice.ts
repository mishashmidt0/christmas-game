import { createSlice } from '@reduxjs/toolkit';

import InitBg from '../../../data/assets/bg/3.jpg';
import InitTree from '../../../data/assets/tree/3.png';
import { activeTree } from '../t9-types/types';

const initialState: initialType = {
  isSnow: false,
  isSound: false,
  tree: InitTree,
  bg: InitBg,
  activeToy: [],
  takenToy: null,
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
    takenToy(state, { payload }) {
      return { ...state, takenToy: payload };
    },
    addActiveToy(state, { payload }) {
      return { ...state, activeToy: [...state.activeToy, payload] };
    },
    deleteActiveToy(state, { payload }) {
      return {
        ...state,
        activeToy: state.activeToy.filter(toy => toy.id !== payload.id),
      };
    },
  },
});

// action
export const {
  changeIsSnow,
  changeIsSound,
  changeTree,
  changeBg,
  addActiveToy,
  deleteActiveToy,
  takenToy,
} = ChristmasTreeSlice.actions;

// type
export type initialType = {
  isSnow: boolean;
  isSound: boolean;
  tree: string;
  bg: string;
  takenToy: activeTree | null;
  activeToy: activeTree[];
};
