import {createSlice} from "@reduxjs/toolkit"

const initialState: dataType[] = []

const cardsSlice = createSlice({
    name: "cardsSlice",
    initialState: initialState,
    reducers: {
        setCards(state, {payload}) {
            return [...payload.state]
        },
    }
})
// action
export const {setCards} = cardsSlice.actions;
export default cardsSlice.reducer;

// thunk
const setCardsTC = ()=> (dispatch)=>{

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




