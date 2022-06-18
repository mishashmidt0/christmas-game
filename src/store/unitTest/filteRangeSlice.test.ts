import filterRangeSlice, {changeAmount, changeYear, filterRangeType} from "../filterRangeSlice";


let initialState: filterRangeType

beforeEach(() => {
        initialState = {
            amount: [1, 12],
            year: [1940, 2020]
        }

    }
);

test("should be change amount", () => {
    const endState = filterRangeSlice(initialState, changeAmount({newValue: [2, 8]}))
    expect(endState.amount).toStrictEqual([2, 8])  // toStrictEqual делает глубокое равество
})
test("should be change year", () => {
    const endState = filterRangeSlice(initialState, changeYear({newValue: [2001, 2012]}))
    expect(endState.year).toStrictEqual([2001, 2012])
})