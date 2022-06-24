import { createSlice } from '@reduxjs/toolkit';


export enum Count {
  start = 1,
  end = 12,
}

export enum Year {
  start = 1940,
  end = 2020,
}

const initialState: filterRangeAndSortType = {
  count: [Count.start, Count.end],
  year: [Year.start, Year.end],
  sort: '',
  search: '',
};

const filterRangeAndSortSlice = createSlice({
  name: 'filterRangeAndSort',
  initialState: initialState,
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
