import React, { useEffect, useMemo } from 'react';
import s from './styleCards.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { cardsType, setCardsTC } from '../../../store/cardsSlice';
import { Dispatch } from '@reduxjs/toolkit';
import { storeType } from '../../../store/redux';
import { Preloader } from './Preloader';
import { Card } from './Card';
import { allFilters, search, sort } from './ustilFiltersAndSorting';
import { filterType } from '../../../store/filterValueSlice';
import { filterRangeAndSortType } from '../../../store/filterRangeAndSortSlice';

export const Cards = () => {
  const dispatch = useDispatch<Dispatch<any>>();
  const cards = useSelector<storeType, cardsType[]>(state => state.cards);
  const filterValue = useSelector<storeType, filterType>(state => state.filterValue);
  const filter = useSelector<storeType, filterRangeAndSortType>(state => state.filter);

  useEffect(() => {
    dispatch(setCardsTC());
  }, []);

  // Здесь массив карты проходят через 3 стадии, фильтр по значени, по сортировке и по поиску

  // Получаем массив карт которые проходят по выбранным значениям
  const filteredArr = useMemo(
    () =>
      cards.filter(card => {
        return allFilters(card, filterValue, filter);
      }),
    [cards, filterValue, filter.count, filter.year],
  );

  // Далее Получаем массив карт которые проходят по сортировке
  const sorting = useMemo(
    () => sort(filteredArr, filter.sort),
    [filteredArr, filter.sort],
  );

  // И получаем массив карт которые проходят по поиску
  const searching = useMemo(
    () => search(sorting, filter.search),
    [sorting, filter.search, filter.sort],
  );

  // Получаем окончательный список карточек
  const tsxCards = useMemo(
    () => searching.map(c => <Card {...c} key={c.num} />),
    [searching, filter.sort],
  );

  if (!cards.length) return <Preloader />;
  return <div className={s.containerCards}>{tsxCards}</div>;
};
