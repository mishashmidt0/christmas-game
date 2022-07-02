import React from 'react';

import { ReturnComponentType } from '../../../types';

import { FilterForRange } from './components/FilterForRange';
import { FilterForValue } from './components/FilterForValue';
import { FilterSort } from './components/FilterSort';
import style from './style/styleFilters.module.css';

export const FiltersContainer = (): ReturnComponentType => {
  return (
    <div className={style.container}>
      <FilterForValue />
      <FilterForRange />
      <FilterSort />
    </div>
  );
};
