import React, { useCallback } from 'react';

import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';

import { SortTitle } from '../../../../enums/enumForFilter';
import { resetIsActiveToys } from '../../../../store/appSlice';
import { resetActiveCards } from '../../../../store/cardsSlice';
import { changeSort, resetRange } from '../../../../store/filterRangeAndSortSlice';
import { resetValue } from '../../../../store/filterValueSlice';
import { ReturnComponentType } from '../../../../types';
import style from '../style/styleSort.module.css';

import { SelectComponent } from './SelectComponent';

export const FilterSort = (): ReturnComponentType => {
  const dispatch = useDispatch();

  const reset = useCallback(() => {
    dispatch(changeSort({ value: '' }));
    dispatch(resetValue());
    dispatch(resetRange());
    dispatch(resetIsActiveToys());
    dispatch(resetActiveCards());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <h3>{SortTitle.header}</h3>
      <SelectComponent />

      <Button variant="contained" color="primary" onClick={reset}>
        {SortTitle.button}
      </Button>
    </div>
  );
};
