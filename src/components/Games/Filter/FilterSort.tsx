import React, { useCallback } from 'react';
import style from './style/styleSort.module.css';
import { Button } from '@mui/material';
import { SelectComponent } from './select';
import { useDispatch } from 'react-redux';
import { changeSort, resetRange } from '../../../store/filterRangeAndSortSlice';
import { resetValue } from '../../../store/filterValueSlice';
import { resetIsActiveToys } from '../../../store/appSlice';
import { resetActiveCards } from '../../../store/cardsSlice';

export const FilterSort = () => {
  enum Title {
    header = 'Сортировка',
    button = 'Сброс фильтров'
  }

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
      <h3>{Title.header}</h3>
      <SelectComponent />

      <Button variant='contained' color={'primary'} onClick={reset}>
        {Title.button}
      </Button>
    </div>
  );
};
