import { combineReducers, configureStore } from '@reduxjs/toolkit';
import filterValueReducer from './filterValueSlice';
import filterRangeAndSortSlice from './filterRangeAndSortSlice';
import cardsSlice from './cardsSlice';
import thunk from 'redux-thunk';
import appSlice from './appSlice';

const reducer = combineReducers({
  filterValue: filterValueReducer,
  filter: filterRangeAndSortSlice,
  cards: cardsSlice,
  app: appSlice,
});

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
});

export type storeType = ReturnType<typeof reducer>;

// @ts-ignore
window.store = store;
