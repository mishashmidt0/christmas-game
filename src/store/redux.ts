import {combineReducers, configureStore} from "@reduxjs/toolkit"
import filterReducer from "./filterSlice"

const reducer = combineReducers({
    filters: filterReducer
})


export const store = configureStore({
    reducer
})

export type storeType = ReturnType<typeof reducer>