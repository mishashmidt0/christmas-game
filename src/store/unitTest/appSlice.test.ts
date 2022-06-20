import appSlice, {appType, changeActiveToys, changeHeaderHidden} from "../appSlice";

let initialState: appType

beforeEach(() => {
    initialState = {
        headerHidden: false,
        activeToys: 0
    }
});

test("should be change headerHidden", () => {
    const endState = appSlice(initialState, changeHeaderHidden({value: true}))

    expect(endState.headerHidden).toBe(true)
})

test("should be change activeToys", () => {
    const endState = appSlice(initialState, changeActiveToys({value: 10}))

    expect(endState.activeToys).toBe(10)
})


