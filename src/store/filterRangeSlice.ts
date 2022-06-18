import {createSlice} from "@reduxjs/toolkit"


const initialState: filterRangeType = {
    amount: [1, 12],
    year: [1940, 2020]
}

const filterRangeSlice = createSlice({
    name: "filterValue",
    initialState: initialState,
    reducers: {
        changeAmount(state, {payload}) {
            return {...state, amount: [...payload.newValue]}
        },
        changeYear(state, {payload}) {
            return {...state, year: [...payload.newValue]}
        },
    }
})

export const {changeAmount, changeYear} = filterRangeSlice.actions;
export default filterRangeSlice.reducer;


// type
export type keyType = "amount" | "year"

export type filterRangeType = {
    [key in keyType]: number[];
};




