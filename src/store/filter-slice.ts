import {createSlice} from "@reduxjs/toolkit"

export enum FilterName {
    bell = "шар",
    handbell = "колокольчик",
    cone = "шишка",
    snowflake = "снежинка",
    figurine = "фигурка",
    white = "белый",
    yellow = "желтый",
    red = "красный",
    blue = "синий",
    green = "зелёный",
    big = "большой",
    middle = "средний",
    small = "малый",
    favorite = "favorite",
}

const initialState: filterType = {
    form: [{name: FilterName.bell, isActive: false},
        {name: FilterName.handbell, isActive: false},
        {name: FilterName.cone, isActive: false},
        {name: FilterName.snowflake, isActive: false},
        {name: FilterName.figurine, isActive: false},],

    color: [{name: FilterName.white, isActive: false},
        {name: FilterName.yellow, isActive: false},
        {name: FilterName.red, isActive: false},
        {name: FilterName.blue, isActive: false},
        {name: FilterName.green, isActive: false}],

    size: [{name: FilterName.big, isActive: false},
        {name: FilterName.middle, isActive: false},
        {name: FilterName.small, isActive: false},],

    favorite: [{name: FilterName.favorite, isActive: false}]
}

const filterSlice = createSlice({
    name: "filters",
    initialState: initialState,
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


// type
export type valueType = {
    name: string
    isActive: boolean
}

export type filterType = { [key: string]: valueType[] }




