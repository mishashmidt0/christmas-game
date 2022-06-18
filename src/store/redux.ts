import {combineReducers, configureStore} from "@reduxjs/toolkit"
import filterValueReducer from "./filterValueSlice"
import filterRangeAndSortSlice from "./filterRangeAndSortSlice"
import cardsSlice from "./cardsSlice";


const reducer = combineReducers({
    filterValue: filterValueReducer,
    filter: filterRangeAndSortSlice,
    cards: cardsSlice,
})


export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export type storeType = ReturnType<typeof reducer>