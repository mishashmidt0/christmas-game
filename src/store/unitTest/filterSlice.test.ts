import { changeColor, changeFavorite, changeForm, changeSize, Color, filterType, filterValueSlice, Property, Shape, Size } from '../filterValueSlice';

let initialState: filterType;

beforeEach(() => {
  initialState = {
    shape: [
      { name: Shape.bell, isActive: false },
      { name: Shape.handbell, isActive: false },
      { name: Shape.cone, isActive: false },
      { name: Shape.snowflake, isActive: false },
      { name: Shape.figurine, isActive: false },
    ],

    color: [
      { name: Color.white, isActive: false },
      { name: Color.yellow, isActive: false },
      { name: Color.red, isActive: false },
      { name: Color.blue, isActive: false },
      { name: Color.green, isActive: false },
    ],

    size: [
      { name: Size.big, isActive: false },
      { name: Size.middle, isActive: false },
      { name: Size.small, isActive: false },
    ],

    favorite: [{ name: Property.favorite, isActive: false }],
  };
});

test('should be change isActive from form toys', () => {
  const endState = filterValueSlice.reducer(
    initialState,
    changeForm({ name: Shape.bell, isActive: true }),
  );
  expect(endState.shape[0].name).toBe('шар');
  expect(endState.shape[0].isActive).toBe(true);
});
test('should be change isActive from color', () => {
  const endState = filterValueSlice.reducer(
    initialState,
    changeColor({ name: Color.red, isActive: true }),
  );
  expect(endState.color[2].name).toBe('красный');
  expect(endState.color[2].isActive).toBe(true);
});
test('should be change isActive from size', () => {
  const endState = filterValueSlice.reducer(
    initialState,
    changeSize({ name: Size.small, isActive: true }),
  );
  expect(endState.size[2].name).toBe('малый');
  expect(endState.size[2].isActive).toBe(true);
});
test('should be change isActive from favorite', () => {
  const endState = filterValueSlice.reducer(
    initialState,
    changeFavorite({ name: Property.favorite, isActive: true }),
  );
  expect(endState.favorite[0].name).toBe('favorite');
  expect(endState.favorite[0].isActive).toBe(true);
});
