import {createSlice} from "@reduxjs/toolkit"

const filterSlice = createSlice({
    name: "filter",
    initialState: {
        filter: {}
    },
    reducers: {
        changeForm(state, action) {

        },
        changeColor(state, action) {
        },
        changeSize(state, action) {
        },
        changeFavorite(state, action) {
        },
    }
})

export const {changeForm, changeFavorite, changeSize, changeColor} = filterSlice.actions;
export default filterSlice.reducer;