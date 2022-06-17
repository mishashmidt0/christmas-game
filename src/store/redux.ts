import {combineReducers, configureStore} from "@reduxjs/toolkit"
import filterReducer from "./filter-slice"

const reducer = combineReducers({
    filters: filterReducer
})


export const store = configureStore({
    reducer
})

export type storeType = ReturnType<typeof reducer>