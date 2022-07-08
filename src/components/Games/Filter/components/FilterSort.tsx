import React, { useCallback } from 'react';

import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';

import { SortTitle } from '../../../../enums/enumForFilter';
import { resetIsActiveToys } from '../../../../store/appSlice';
import { ReturnComponentType } from '../../../../types';
import { resetActiveCards } from '../../slice/cardsSlice';
import { changeSort, resetRange } from '../../slice/filterRangeAndSortSlice';
import { resetValue } from '../../slice/filterValueSlice';
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
