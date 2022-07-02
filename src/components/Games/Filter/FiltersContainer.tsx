import React from 'react';
import { FilterForValue } from './components/FilterForValue';
import { FilterForRange } from './components/FilterForRange';
import style from './style/styleFilters.module.css';
import { FilterSort } from './components/FilterSort';

export const FiltersContainer = () => {
  return (
    <div className={style.container}>
      <FilterForValue />
      <FilterForRange />
      <FilterSort />
    </div>
  );
};
