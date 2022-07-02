import React, { useCallback } from 'react';
import style from '../style/styleRange.module.css';
import { useSelector } from 'react-redux';
import { storeType } from '../../../../store/redux';
import { RangeSlider } from './RangeSlider';
import { changeAmount, changeYear, endCount, endYear, startCount, startYear } from '../../../../store/filterRangeAndSortSlice';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { FilterRangeTitle } from './enumForFilter';

export const FilterForRange = () => {
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
      <div className={style.block}>
        <p>{title}</p>
        <RangeSlider currentValue={number} AC={AC} max={max} min={min} />
      </div>
    ),
    [],
  );
  return (
    <div className={style.container}>
      <h3>Фильтр по диапазону</h3>
      {createBlock(FilterRangeTitle.count, count, changeAmount, endCount, startCount)}
      {createBlock(FilterRangeTitle.year, year, changeYear, endYear, startYear)}
    </div>
  );
};
