import { createSlice } from '@reduxjs/toolkit';
import { changeFilter } from './utilReducer';

export enum FilterName {
  bell = 'шар',
  handbell = 'колокольчик',
  cone = 'шишка',
  snowflake = 'снежинка',
  figurine = 'фигурка',
  white = 'белый',
  yellow = 'желтый',
  red = 'красный',
  blue = 'синий',
  green = 'зелёный',
  big = 'большой',
  middle = 'средний',
  small = 'малый',
  favorite = 'favorite',
}

const initialState: filterType = {
  shape: [
    { name: FilterName.bell, isActive: false },
    { name: FilterName.handbell, isActive: false },
    { name: FilterName.cone, isActive: false },
    { name: FilterName.snowflake, isActive: false },
    { name: FilterName.figurine, isActive: false },
  ],

  color: [
    { name: FilterName.white, isActive: false },
    { name: FilterName.yellow, isActive: false },
    { name: FilterName.red, isActive: false },
    { name: FilterName.blue, isActive: false },
    { name: FilterName.green, isActive: false },
  ],

  size: [
    { name: FilterName.big, isActive: false },
    { name: FilterName.middle, isActive: false },
    { name: FilterName.small, isActive: false },
  ],

  favorite: [{ name: FilterName.favorite, isActive: false }],
};

export const filterValueSlice = createSlice({
  name: 'filterValue',
  initialState: initialState,
  reducers: {
    changeForm(state, { payload }) {
      return changeFilter(state, payload.name, payload.isActive, 'shape');
    },
    changeColor(state, { payload }) {
      return changeFilter(state, payload.name, payload.isActive, 'color');
    },
    changeSize(state, { payload }) {
      return changeFilter(state, payload.name, payload.isActive, 'size');
    },
    changeFavorite(state, { payload }) {
      return changeFilter(state, payload.name, payload.isActive, 'favorite');
    },
    resetValue() {
      return { ...initialState };
    },
  },
});

export const { changeForm, changeFavorite, changeSize, changeColor, resetValue } =
  filterValueSlice.actions;
export default filterValueSlice.reducer;

// type
export type keyType = 'shape' | 'color' | 'size' | 'favorite';
export type valueType = {
  name: string;
  isActive: boolean;
};

export type filterType = Record<keyType, valueType[]>;
