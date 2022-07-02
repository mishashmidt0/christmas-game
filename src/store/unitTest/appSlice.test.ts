import appSlice, {
  appType,
  changeActiveToys,
  changeHeaderHidden,
  resetIsActiveToys,
} from '../appSlice';

let initialState: appType;

beforeEach(() => {
  initialState = {
    headerHidden: false,
    activeToys: 3,
  };
});

test('should be change headerHidden', () => {
  const endState = appSlice(initialState, changeHeaderHidden({ value: true }));

  expect(endState.headerHidden).toBe(true);
});

test('should be change activeToys', () => {
  const endState = appSlice(initialState, changeActiveToys({ value: 10 }));

  expect(endState.activeToys).toBe(10);
});

test('should be reset activeToys', () => {
  const endState = appSlice(initialState, resetIsActiveToys());

  expect(endState.activeToys).toBe(0);
});
