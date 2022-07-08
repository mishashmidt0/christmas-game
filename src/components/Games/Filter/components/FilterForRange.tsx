import React, { useCallback } from 'react';

import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { FilterRangeTitle } from '../../../../enums/enumForFilter';
import { storeType } from '../../../../store/redux';
import { ReturnComponentType } from '../../../../types';
import {
  changeAmount,
  changeYear,
  endCount,
  endYear,
  startCount,
  startYear,
} from '../../slice/filterRangeAndSortSlice';
import style from '../style/styleRange.module.css';

import { RangeSlider } from './RangeSlider';

export const FilterForRange = (): ReturnComponentType => {
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
