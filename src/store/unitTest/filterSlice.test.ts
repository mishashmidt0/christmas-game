import {changeColor, changeFavorite, changeForm, changeSize, FilterName, filterSlice, filterType} from "../filterSlice";

let initialState: filterType

beforeEach(() => {
    initialState = {
        form: [{name: FilterName.bell, isActive: false},
            {name: FilterName.handbell, isActive: false},
            {name: FilterName.cone, isActive: false},
            {name: FilterName.snowflake, isActive: false},
            {name: FilterName.figurine, isActive: false},],

        color: [{name: FilterName.white, isActive: false},
            {name: FilterName.yellow, isActive: false},
            {name: FilterName.red, isActive: false},
            {name: FilterName.blue, isActive: false},
            {name: FilterName.green, isActive: false}],

        size: [{name: FilterName.big, isActive: false},
            {name: FilterName.middle, isActive: false},
            {name: FilterName.small, isActive: false},],

        favorite: [{name: FilterName.favorite, isActive: false}]
    }
});

test("should be change isActive from form toys", () => {
    const endState = filterSlice.reducer(initialState, changeForm({name: FilterName.bell, isActive: true}))
    expect(endState.form[0].name).toBe("шар")
    expect(endState.form[0].isActive).toBe(true)
})
test("should be change isActive from color", () => {
    const endState = filterSlice.reducer(initialState, changeColor({name: FilterName.red, isActive: true}))
    expect(endState.color[2].name).toBe("красный")
    expect(endState.color[2].isActive).toBe(true)
})
test("should be change isActive from size", () => {
    const endState = filterSlice.reducer(initialState, changeSize({name: FilterName.small, isActive: true}))
    expect(endState.size[2].name).toBe("малый")
    expect(endState.size[2].isActive).toBe(true)
})
test("should be change isActive from favorite", () => {
    const endState = filterSlice.reducer(initialState, changeFavorite({name: FilterName.favorite, isActive: true}))
    expect(endState.favorite[0].name).toBe("favorite")
    expect(endState.favorite[0].isActive).toBe(true)
})