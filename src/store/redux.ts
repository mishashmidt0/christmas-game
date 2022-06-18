import {combineReducers, configureStore} from "@reduxjs/toolkit"
import filterValueReducer from "./filterValueSlice"
import filterRangeSlice from "./filterRangeSlice"


const reducer = combineReducers({
    filterValue: filterValueReducer,
    filterRange: filterRangeSlice
})


export const store = configureStore({
    reducer
})

export type storeType = ReturnType<typeof reducer>