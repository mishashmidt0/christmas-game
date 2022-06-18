import filterRangeSlice, {changeAmount, changeSort, changeYear, filterRangeAndSortType} from "../filterRangeAndSortSlice";


let initialState: filterRangeAndSortType

beforeEach(() => {
        initialState = {
            amount: [1, 12],
            year: [1940, 2020],
            sort: ""
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
test("should be change sort", () => {
    const endState = filterRangeSlice(initialState, changeSort({value: "10"}))
    expect(endState.sort).toBe("10")
})