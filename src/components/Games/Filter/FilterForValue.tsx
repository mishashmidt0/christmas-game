import React, { useCallback } from 'react';
import s from './style/styleValue.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { storeType } from '../../../store/redux';
import {
  changeColor,
  changeFavorite,
  changeForm,
  changeSize,
  filterType,
  keyType,
  valueType,
} from '../../../store/filterValueSlice';

export const FilterForValue = () => {
  const filters = useSelector<storeType, filterType>(state => state.filterValue);
  const dispatch = useDispatch();

  // Принимаем фильтр который установил пользователь
  const changeFiler = useCallback((key: keyType, name: string, isActive: boolean) => {
    switch (key) {
      case 'shape':
        return dispatch(changeForm({ name, isActive }));
      case 'color':
        return dispatch(changeColor({ name, isActive }));
      case 'size':
        return dispatch(changeSize({ name, isActive }));
      case 'favorite':
        return dispatch(changeFavorite({ name, isActive }));
    }
  }, []);

  const createBlock = useCallback(
    (key: keyType, title: string, arr: valueType[]) => {
      return (
        <div className={s[key]}>
          <>{title}</>
          {arr.map((el, i) => (
            <button
              key={i}
              className={el.isActive ? s.active : s.diActive}
              data-filter={el.name}
              onClick={() => changeFiler(key, el.name, !el.isActive)}
            />
          ))}
        </div>
      );
    },
    [filters],
  );

  return (
    <div className={s.container}>
      <h3>Фильтр по значению</h3>
      {createBlock('shape', 'Форма:', filters.shape)}
      {createBlock('color', 'Цвет:', filters.color)}
      {createBlock('size', 'Размер:', filters.size)}
      {createBlock('favorite', ' Только любимые:', filters.favorite)}
    </div>
  );
};
