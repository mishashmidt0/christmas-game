import {configureStore} from "@reduxjs/toolkit"
import filterReducer from "./filter-slice"

export default configureStore({
    reducer: {
        filter: filterReducer
    }
})