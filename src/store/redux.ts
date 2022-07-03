import { combineReducers, configureStore, ThunkDispatch } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import thunk from 'redux-thunk';

import cardsSlice from '../components/Games/slice/cardsSlice';
import filterRangeAndSortSlice from '../components/Games/slice/filterRangeAndSortSlice';
import filterValueReducer from '../components/Games/slice/filterValueSlice';
import {
  changeIsSnow,
  changeIsSound,
  ChristmasTreeSlice,
} from '../components/Tree/slice/ChristmasTreeSlice-slice';

import appSlice from './appSlice';

const reducer = combineReducers({
  filterValue: filterValueReducer,
  filter: filterRangeAndSortSlice,
  cards: cardsSlice,
  app: appSlice,
  tree: ChristmasTreeSlice.reducer,
});

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
});
export type storeType = ReturnType<typeof reducer>;

export type AllActionType =
  | ReturnType<typeof changeIsSnow>
  | ReturnType<typeof changeIsSound>;

export type TypedDispatch = ThunkDispatch<storeType, any, AllActionType>;
export const useAppDispatch = (): TypedDispatch => useDispatch<TypedDispatch>();

export const useAppSelector: TypedUseSelectorHook<storeType> = useSelector;

// @ts-ignore
window.store = store;
