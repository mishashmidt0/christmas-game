import { createSlice } from '@reduxjs/toolkit';

export const startCount = 1;
export const endCount = 12;
export const startYear = 1940;
export const endYear = 2020;

const initialState: filterRangeAndSortType = {
  count: [startCount, endCount],
  year: [startYear, endYear],
  sort: '',
  search: '',
};

const filterRangeAndSortSlice = createSlice({
  name: 'filterRangeAndSort',
  initialState,
  reducers: {
    changeAmount(state, { payload }) {
      return { ...state, count: [...payload.newValue] };
    },
    changeYear(state, { payload }) {
      return { ...state, year: [...payload.newValue] };
    },
    changeSort(state, { payload }) {
      return { ...state, sort: payload.value };
    },
    changeSearch(state, { payload }) {
      return { ...state, search: payload.value };
    },
    resetRange() {
      return { ...initialState };
    },
  },
});

export const { changeAmount, changeYear, changeSort, resetRange, changeSearch } =
  filterRangeAndSortSlice.actions;
export default filterRangeAndSortSlice.reducer;

// type
export type filterRangeAndSortType = {
  count: number[];
  year: number[];
  sort: string;
  search: string;
};
export type keyRangeType = keyof filterRangeAndSortType;
