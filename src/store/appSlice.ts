import {createSlice, Dispatch} from "@reduxjs/toolkit"
import {cardsApi} from "../api/cards-api";

const initialState: cardsType[] = []

//slice
const cardsSlice = createSlice({
    name: "cardsSlice",
    initialState: initialState,
    reducers: {
        setCards(state, {payload}) {
            return payload.state.map((c: dataType) => ({...c, isChoose: false}))
        },
        chooseCard(state, {payload:{id,value}}) {
            return state.map((c: cardsType) => c.num === id ? {...c, isChoose: value} : c)
        },
    }
})
export default cardsSlice.reducer;

// action
export const {setCards, chooseCard} = cardsSlice.actions;


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
export type isChooseType = { isChoose: boolean }
export type cardsType = dataType & isChooseType

export type keyDataType = keyof dataType




