import React, { useCallback } from 'react';
import s from './style/styleRange.module.css';
import { useSelector } from 'react-redux';
import { storeType } from '../../../store/redux';
import { RangeSlider } from './range';
import { changeAmount, changeYear, Count, Year } from '../../../store/filterRangeAndSortSlice';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

export const FilterForRange = () => {
  enum Title {
    count = 'Количество экземпляров:',
    year = 'Год приобретения:'
  }

  const year = useSelector<storeType, number[]>(state => state.filter.year);

  const count = useSelector<storeType, number[]>(state => state.filter.count);

  const createBlock = useCallback(
    (
      title: string,
      number: number[],
      AC: ActionCreatorWithPayload<{ newValue: number[] }>,
      max: number,
      min: number,
    ) => (
      <div className={s.block}>
        <p>{title}</p>
        <RangeSlider number={number} AC={AC} max={max} min={min} />
      </div>
    ),
    [],
  );
  return (
    <div className={s.container}>
      <h3>Фильтр по диапазону</h3>
      {createBlock(Title.count, count, changeAmount, Count.end, Count.start)}
      {createBlock(Title.year, year, changeYear, Year.end, Year.start)}
    </div>
  );
};
