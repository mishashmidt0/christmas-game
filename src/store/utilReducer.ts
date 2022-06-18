import {filterType, keyType} from "./filterValueSlice";


export const changeFilter = (state: filterType, name: string, isActive: boolean, key: keyType) => {
    return {...state, [key]: state[key].map(el => el.name === name ? {...el, isActive: isActive} : el)}
}