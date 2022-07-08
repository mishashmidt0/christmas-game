import React, { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid4 } from 'uuid';

import { FilterValueTitle } from '../../../../enums/enumForFilter';
import { storeType } from '../../../../store/redux';
import { ReturnComponentType } from '../../../../types';
import {
  changeColor,
  changeFavorite,
  changeForm,
  changeSize,
  filterType,
  keyType,
  Property,
  valueType,
} from '../../slice/filterValueSlice';
import style from '../style/styleValue.module.css';

export const FilterForValue = (): ReturnComponentType => {
  const filters = useSelector<storeType, filterType>(state => state.filterValue);
  const dispatch = useDispatch();

  // Принимаем фильтр который установил пользователь
  const changeFilter = useCallback((key: keyType, name: string, isActive: boolean) => {
    switch (key) {
      case Property.shape:
        return dispatch(changeForm({ name, isActive }));
      case Property.color:
        return dispatch(changeColor({ name, isActive }));
      case Property.size:
        return dispatch(changeSize({ name, isActive }));
      case Property.favorite:
        return dispatch(changeFavorite({ name, isActive }));
      default:
        break;
    }
  }, []);

  const createBlock = useCallback(
    (key: keyType, title: string, arr: valueType[]) => {
      return (
        <div className={style[key]}>
          {title}
          {arr.map(element => (
            <button
              aria-label="Mute volume"
              type="button"
              key={uuid4()}
              className={element.isActive ? style.activeButton : style.inActiveButton}
              data-filter={element.name}
              onClick={() => changeFilter(key, element.name, !element.isActive)}
            />
          ))}
        </div>
      );
    },
    [filters],
  );

  return (
    <div className={style.container}>
      <h3>Фильтр по значению</h3>

      {createBlock(Property.shape, FilterValueTitle.shape, filters.shape)}
      {createBlock(Property.color, FilterValueTitle.color, filters.color)}
      {createBlock(Property.size, FilterValueTitle.size, filters.size)}
      {createBlock(Property.favorite, FilterValueTitle.favorite, filters.favorite)}
    </div>
  );
};
