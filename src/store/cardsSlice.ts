import {createSlice, Dispatch} from "@reduxjs/toolkit"
import {cardsApi} from "../api/cards-api";

const initialState: dataType[] = []

//slice
const cardsSlice = createSlice({
    name: "cardsSlice",
    initialState: initialState,
    reducers: {
        setCards(state, {payload}) {
            return [...payload.state]
        },
    }
})
export default cardsSlice.reducer;

// action
export const {setCards} = cardsSlice.actions;


// thunk
export const setCardsTC = () => (dispatch: Dispatch<any>) => {
    cardsApi.setCards().then(res => {
        dispatch(setCards({state: res}))
    })
}


// type
export  type dataType = {
    num: string,
    name: string,
    count: string,
    year: string,
    shape: string,
    color: string,
    size: string,
    favorite: boolean,
}
export type keyDataType = keyof dataType




