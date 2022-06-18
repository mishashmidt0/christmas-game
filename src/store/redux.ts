import {combineReducers, configureStore} from "@reduxjs/toolkit"
import filterValueReducer from "./filterValueSlice"
import filterRangeAndSortSlice from "./filterRangeAndSortSlice"


const reducer = combineReducers({
    filterValue: filterValueReducer,
    filter: filterRangeAndSortSlice
})


export const store = configureStore({
    reducer
})

export type storeType = ReturnType<typeof reducer>