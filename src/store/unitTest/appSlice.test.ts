import cardsSlice, {cardsType, chooseCard, dataType, setCards} from "../cardsSlice";

let initialState: cardsType[]

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

test("should de change choose a card", () => {
    initialState = [{
        num: '1',
        name: 'Большой шар с рисунком',
        count: '2',
        year: '1960',
        shape: 'шар',
        color: 'желтый',
        size: 'большой',
        favorite: false,
        isChoose: false
    },]

    const endState = cardsSlice(initialState, chooseCard({id: "1", value: true}))

    expect(endState[0].isChoose).toBe(true)
})