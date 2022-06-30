import React from 'react';
import { FilterForValue } from './FilterForValue';
import { FilterForRange } from './FilterForRange';
import style from './style/styleFilters.module.css';
import { FilterSort } from './FilterSort';

export const FiltersContainer = () => {
  return (
    <div className={style.container}>
      <FilterForValue />
      <FilterForRange />
      <FilterSort />
    </div>
  );
};
