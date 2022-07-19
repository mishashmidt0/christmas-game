import { createSlice } from '@reduxjs/toolkit';

import InitBg from '../../../data/assets/bg/3.jpg';
import InitTree from '../../../data/assets/tree/3.png';
import { activeTree } from '../t9-types/types';

const initialState: initialType = {
  isSnow: false,
  isSound: false,
  tree: InitTree,
  bg: InitBg,
  toysOnTheTree: [],
  takenToy: null,
  saveTree: [],
  showTree: '',
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
    addToyOnTheTree(state, { payload }) {
      return { ...state, toysOnTheTree: [...state.toysOnTheTree, payload] };
    },
    changeSaveTree(state, { payload }) {
      return { ...state, saveTree: [...state.saveTree, payload] };
    },
    changeShowTree(state, { payload }) {
      return { ...state, showTree: payload };
    },
    clearSaveTree(state) {
      return { ...state, saveTree: [] };
    },
    moveToyOnTheTree(state, { payload }) {
      return {
        ...state,
        toysOnTheTree: state.toysOnTheTree.map(toy =>
          toy.id === payload.id ? { ...toy, style: payload.style } : toy,
        ),
      };
    },
    deleteToyOnTheTree(state, { payload }) {
      return {
        ...state,
        toysOnTheTree: state.toysOnTheTree.filter(toy => toy.id !== payload),
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
  addToyOnTheTree,
  deleteToyOnTheTree,
  moveToyOnTheTree,
  takenToy,
  changeSaveTree,
  changeShowTree,
  clearSaveTree,
} = ChristmasTreeSlice.actions;

// type
export type initialType = {
  isSnow: boolean;
  isSound: boolean;
  tree: string;
  bg: string;
  takenToy: activeTree | null;
  toysOnTheTree: activeTree[];
  saveTree: string[];
  showTree: string;
};
