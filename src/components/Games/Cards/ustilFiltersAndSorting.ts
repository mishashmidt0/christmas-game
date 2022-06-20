import {cardsType, dataType, keyDataType} from "../../../store/cardsSlice";
import {filterType, keyType} from "../../../store/filterValueSlice";
import {filterRangeAndSortType, keyRangeType} from "../../../store/filterRangeAndSortSlice";


// Делаем проверку каждой карточки, что бы удовлетворяла условиям
export const allFilters = (card: cardsType, filterValue: filterType, filter: filterRangeAndSortType): boolean => {
    if (
        filterValues(card, "shape", filterValue) &&
        filterValues(card, "color", filterValue) &&
        filterValues(card, "size", filterValue) &&
        filterValues(card, "favorite", filterValue) &&
        filterRange(card, "count", filter) &&
        filterRange(card, "year", filter)
    ) return true

    return false
}

// Делаем проверку на активыные фильтры (получаем массив активных button)
const searchIsActiveItem = (key: keyType, filterValue: filterType) => {
    return filterValue[key].filter((f) => f.isActive === true)
}

// Если всё НЕ активно карточка проходит, если Есть активная кнопка, проверям с помощью метода find (на его пустоту)
// Если пусто карточка не прошла, так как ее св-ва нету в массиве активных кнопок
const filterValues = (card: cardsType, key: keyType, filterValue: filterType): boolean => {
    const formArr = searchIsActiveItem(key, filterValue)
    if (formArr.length && key === "favorite") return !!formArr.find((item) => item.isActive === card[key])
    if (formArr.length) return !!formArr.find((item) => item.name === card[key])
    return true
}

// Проверяем диапазон
const filterRange = (card: cardsType, key: keyRangeType, filter: filterRangeAndSortType) => {
    const [start, end] = filter[key] as number[]
    return (+card[key as keyDataType] >= start && +card[key as keyDataType] <= end)
}

// Сортируем полученный список
export const sort = (filteredArr: cardsType[], sortKey: string) => {
    switch (sortKey.toString()) {
        case "10":
            return filteredArr.sort((a, b) => {
                return (a.name > b.name) ? 1 : -1
            })
        case "21":
            return filteredArr.sort((a, b) => {
                return (a.name < b.name) ? 1 : -1
            })
        case "22":
            return filteredArr.sort((a, b) => {
                return +a.count - +b.count
            })
        case "23":
            return filteredArr.sort((a, b) => {
                return +b.count - +a.count
            })
        default:
            return filteredArr
    }
}

// Поиск по тексту
export const search = (filteredArr: cardsType[], textSearch: string) => {
    if (!textSearch) return filteredArr
    const regexp = new RegExp(`${textSearch}`, "i")

    return filteredArr.filter((item) => regexp.test(item.name))
}