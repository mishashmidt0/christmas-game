import {createSlice} from "@reduxjs/toolkit"


const initialState: filterRangeAndSortType = {
    amount: [1, 12],
    year: [1940, 2020],
    sort: ''
}

const filterRangeAndSortSlice = createSlice({
    name: "filterRangeAndSort",
    initialState: initialState,
    reducers: {
        changeAmount(state, {payload}) {
            return {...state, amount: [...payload.newValue]}
        },
        changeYear(state, {payload}) {
            return {...state, year: [...payload.newValue]}
        },
        changeSort(state, {payload}) {
            return {...state, sort: payload.value}
        },
    }
})

export const {changeAmount, changeYear, changeSort} = filterRangeAndSortSlice.actions;
export default filterRangeAndSortSlice.reducer;


// type
export type filterRangeAndSortType = {
    amount: number[],
    year: number[],
    sort: string
};




