import React, { useEffect, useMemo } from 'react';
import style from './styleCards.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { cardsType, setCardsTC } from '../../../store/cardsSlice';
import { Dispatch } from '@reduxjs/toolkit';
import { storeType } from '../../../store/redux';
import { Preloader } from './Preloader';
import { Card } from './Card';
import { allFilters, searching, sorting } from './ustilFiltersAndSorting';
import { filterType } from '../../../store/filterValueSlice';
import { filterRangeAndSortType } from '../../../store/filterRangeAndSortSlice';

export const Cards = () => {
  const dispatch = useDispatch<Dispatch<any>>();
  const cards = useSelector<storeType, cardsType[]>(state => state.cards);
  const filterValue = useSelector<storeType, filterType>(state => state.filterValue);
  const filter = useSelector<storeType, filterRangeAndSortType>(state => state.filter);
  const { count, year, sort, search } = filter;

  useEffect(() => {
    dispatch(setCardsTC());
  }, []);

  // Здесь массив карт, которые проходят 3 стадии, фильтр по значению, сортировке и поиску.

  // Получаем массив карт которые проходят по выбранным значениям
  const filteredArr = useMemo(
    () =>
      cards.filter(card => {
        return allFilters(card, filterValue, filter);
      }),
    [cards, filterValue, count, year],
  );

  // Далее Получаем массив карт которые проходят по сортировке
  const sortedArr = useMemo(
    () => sorting(filteredArr, sort),
    [filteredArr, sort],
  );

  // И получаем массив карт которые проходят по поиску
  const searchedArr = useMemo(
    () => searching(sortedArr, search),
    [sortedArr, search, sort],
  );

  // Получаем окончательный список карточек
  const tsxCards = useMemo(
    () => searchedArr.map(c => <Card {...c} key={c.num} />),
    [searchedArr, sort],
  );

  return !cards.length ? <Preloader />
    : <div className={style.containerCards}>{tsxCards}</div>;
};
