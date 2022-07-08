import { createSlice } from '@reduxjs/toolkit';

import { changeFilter } from './helpers/utilReducer';

export enum Property {
  shape = 'shape',
  color = 'color',
  size = 'size',
  favorite = 'favorite',
  count = 'count',
  year = 'year',
}

export enum Color {
  white = 'белый',
  yellow = 'желтый',
  red = 'красный',
  blue = 'синий',
  green = 'зелёный',
}

export enum Shape {
  bell = 'шар',
  handbell = 'колокольчик',
  cone = 'шишка',
  snowflake = 'снежинка',
  figurine = 'фигурка',
}

export enum Size {
  big = 'большой',
  middle = 'средний',
  small = 'малый',
}

const initialState: filterType = {
  shape: [
    { name: Shape.bell, isActive: false },
    { name: Shape.handbell, isActive: false },
    { name: Shape.cone, isActive: false },
    { name: Shape.snowflake, isActive: false },
    { name: Shape.figurine, isActive: false },
  ],

  color: [
    { name: Color.white, isActive: false },
    { name: Color.yellow, isActive: false },
    { name: Color.red, isActive: false },
    { name: Color.blue, isActive: false },
    { name: Color.green, isActive: false },
  ],

  size: [
    { name: Size.big, isActive: false },
    { name: Size.middle, isActive: false },
    { name: Size.small, isActive: false },
  ],

  favorite: [{ name: Property.favorite, isActive: false }],
};

export const filterValueSlice = createSlice({
  name: 'filterValue',
  initialState,
  reducers: {
    changeForm(state, { payload }) {
      return changeFilter(state, payload.name, payload.isActive, Property.shape);
    },
    changeColor(state, { payload }) {
      return changeFilter(state, payload.name, payload.isActive, Property.color);
    },
    changeSize(state, { payload }) {
      return changeFilter(state, payload.name, payload.isActive, Property.size);
    },
    changeFavorite(state, { payload }) {
      return changeFilter(state, payload.name, payload.isActive, Property.favorite);
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
export type keyType = Property.shape | Property.color | Property.size | Property.favorite;
export type valueType = {
  name: string;
  isActive: boolean;
};

export type filterType = Record<keyType, valueType[]>;
