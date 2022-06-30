import { cardsType, keyDataType } from '../../../store/cardsSlice';
import { filterType, keyType, Property } from '../../../store/filterValueSlice';
import { filterRangeAndSortType, keyRangeType } from '../../../store/filterRangeAndSortSlice';

export enum Sort {
  nameAZ = '10',
  nameZA = '21',
  ascending = '22',
  descending = '23',
}

// Делаем проверку каждой карточки, что бы удовлетворяла условиям
export const allFilters = (
  card: cardsType,
  filterValue: filterType,
  filter: filterRangeAndSortType,
): boolean => {
  return (
    filterValues(card, Property.shape, filterValue) &&
    filterValues(card, Property.color, filterValue) &&
    filterValues(card, Property.size, filterValue) &&
    filterValues(card, Property.favorite, filterValue) &&
    filterRange(card, Property.count, filter) &&
    filterRange(card, Property.year, filter)
  );
};

// Делаем проверку на активыные фильтры (получаем массив активных button)
const searchIsActiveItem = (key: keyType, filterValue: filterType) => {
  return filterValue[key].filter(f => f.isActive);
};

// Если всё НЕ активно карточка проходит, если Есть активная кнопка, проверям с помощью метода find (на его пустоту)
// Если пусто карточка не прошла, так как ее св-ва нету в массиве активных кнопок
const filterValues = (
  card: cardsType,
  key: keyType,
  filterValue: filterType,
): boolean => {
  const formArr = searchIsActiveItem(key, filterValue);

  // отдельная проверка на любимые карточки
  if (formArr.length && key === Property.favorite) {
    return !!formArr.find(item => item.isActive === card[key]);
  }
// при пустом фильтре возврощаем все, иначе смотрим есть ли этот параметр у карточки
  return formArr.length ? !!formArr.find(item => item.name === card[key]) : true;

};

// Проверяем диапазон
const filterRange = (
  card: cardsType,
  key: keyRangeType,
  filter: filterRangeAndSortType,
) => {
  const [start, end] = filter[key] as number[];
  return +card[key as keyDataType] >= start && +card[key as keyDataType] <= end;
};

// Сортируем полученный список
export const sorting = (filteredArr: cardsType[], sortKey: string) => {
  switch (sortKey.toString()) {
    case Sort.nameAZ:
      return filteredArr.sort((a, b) => {
        return a.name > b.name ? 1 : -1;
      });
    case Sort.nameZA:
      return filteredArr.sort((a, b) => {
        return a.name < b.name ? 1 : -1;
      });
    case Sort.ascending:
      return filteredArr.sort((a, b) => {
        return +a.count - +b.count;
      });
    case Sort.descending:
      return filteredArr.sort((a, b) => {
        return +b.count - +a.count;
      });
    default:
      return filteredArr;
  }
};

// Поиск по тексту
export const searching = (filteredArr: cardsType[], textSearch: string) => {

  const regexp = new RegExp(`${textSearch}`, 'i');

  return (!textSearch) ? filteredArr : filteredArr.filter(item => regexp.test(item.name));
};
