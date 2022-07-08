import filterRangeSlice, {
  changeAmount,
  changeSort,
  changeYear,
  changeSearch,
  filterRangeAndSortType,
} from '../filterRangeAndSortSlice';

let initialState: filterRangeAndSortType;

const startCount = 1;
const endCount = 8;
const stertYear = 1940;
const endtYear = 2020;

beforeEach(() => {
  initialState = {
    count: [startCount, endCount],
    year: [stertYear, endtYear],
    sort: '',
    search: '',
  };
});

test('should be change amount', () => {
  const start = 2;
  const end = 7;
  const endState = filterRangeSlice(
    initialState,
    changeAmount({ newValue: [start, end] }),
  );

  expect(endState.count).toStrictEqual([start, end]); // toStrictEqual делает глубокое равество
});
test('should be change year', () => {
  const start = 2001;
  const end = 2012;
  const endState = filterRangeSlice(initialState, changeYear({ newValue: [start, end] }));

  expect(endState.year).toStrictEqual([start, end]);
});
test('should be change sort', () => {
  const endState = filterRangeSlice(initialState, changeSort({ value: '10' }));

  expect(endState.sort).toBe('10');
});
test('should be change search', () => {
  const endState = filterRangeSlice(initialState, changeSearch({ value: 'red' }));

  expect(endState.search).toBe('red');
});
