import {combineReducers, configureStore} from "@reduxjs/toolkit"
import filterValueReducer from "./filterValueSlice"
import filterRangeAndSortSlice from "./filterRangeAndSortSlice"
import cardsSlice from "./cardsSlice";
import thunk from "redux-thunk";

const reducer = combineReducers({
    filterValue: filterValueReducer,
    filter: filterRangeAndSortSlice,
    cards: cardsSlice,
})


export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})

export type storeType = ReturnType<typeof reducer>

// export const store = createStore(reducers, applyMiddleware(thunk))

// @ts-ignore
window.store = store