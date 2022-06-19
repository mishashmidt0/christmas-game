import {changeForm, FilterName} from "../filterValueSlice";

import cardsSlice, {dataType, setCards} from "../cardsSlice";

let initialState: dataType[]

beforeEach(() => {
    initialState = []
});

test("should de set new cards", () => {
    const endState = cardsSlice(initialState, setCards({
        state: [{
            num: '1',
            name: 'Большой шар с рисунком',
            count: '2',
            year: '1960',
            shape: 'шар',
            color: 'желтый',
            size: 'большой',
            favorite: false,
        },]
    }))

    expect(endState[0].name).toBe("Большой шар с рисунком")
})
