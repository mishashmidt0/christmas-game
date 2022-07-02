import React, { useCallback } from 'react';
import style from '../style/styleSort.module.css';
import { Button } from '@mui/material';
import { SelectComponent } from './SelectComponent';
import { useDispatch } from 'react-redux';
import { changeSort, resetRange } from '../../../../store/filterRangeAndSortSlice';
import { resetValue } from '../../../../store/filterValueSlice';
import { resetIsActiveToys } from '../../../../store/appSlice';
import { resetActiveCards } from '../../../../store/cardsSlice';
import { SortTitle } from './enumForFilter';

export const FilterSort = () => {
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

      <Button variant='contained' color={'primary'} onClick={reset}>
        {SortTitle.button}
      </Button>
    </div>
  );
};
