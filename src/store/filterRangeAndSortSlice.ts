import {createSlice} from "@reduxjs/toolkit"


const initialState: filterRangeAndSortType = {
    count: [1, 12],
    year: [1940, 2020],
    sort: ''
}

const filterRangeAndSortSlice = createSlice({
    name: "filterRangeAndSort",
    initialState: initialState,
    reducers: {
        changeAmount(state, {payload}) {
            return {...state, count: [...payload.newValue]}
        },
        changeYear(state, {payload}) {
            return {...state, year: [...payload.newValue]}
        },
        changeSort(state, {payload}) {
            return {...state, sort: payload.value}
        },
        resetRange() {
            return {...initialState}
        },
    }
})

export const {changeAmount, changeYear, changeSort, resetRange} = filterRangeAndSortSlice.actions;
export default filterRangeAndSortSlice.reducer;

export type keyTypeForFilterRangeAndSort = "count" | "year" | "sort";

// type
export type filterRangeAndSortType = {
    count: number[],
    year: number[],
    sort: string
};
export type keyRangeType = keyof filterRangeAndSortType;


