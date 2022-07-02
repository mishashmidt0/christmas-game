import filterRangeSlice, {
  changeAmount,
  changeSort,
  changeYear,
  changeSearch,
  filterRangeAndSortType,
} from '../filterRangeAndSortSlice';

let initialState: filterRangeAndSortType;

beforeEach(() => {
  initialState = {
    count: [1, 12],
    year: [1940, 2020],
    sort: '',
    search: '',
  };
});

test('should be change amount', () => {
  const endState = filterRangeSlice(initialState, changeAmount({ newValue: [2, 8] }));
  expect(endState.count).toStrictEqual([2, 8]); // toStrictEqual делает глубокое равество
});
test('should be change year', () => {
  const endState = filterRangeSlice(initialState, changeYear({ newValue: [2001, 2012] }));
  expect(endState.year).toStrictEqual([2001, 2012]);
});
test('should be change sort', () => {
  const endState = filterRangeSlice(initialState, changeSort({ value: '10' }));
  expect(endState.sort).toBe('10');
});
test('should be change search', () => {
  const endState = filterRangeSlice(initialState, changeSearch({ value: 'red' }));
  expect(endState.search).toBe('red');
});
