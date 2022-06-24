import React, { useCallback, useMemo } from 'react';
import s from './style/styleValue.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { storeType } from '../../../store/redux';
import {
  changeColor,
  changeFavorite,
  changeForm,
  changeSize,
  filterType,
  keyType, Property,
  valueType,
} from '../../../store/filterValueSlice';

export const FilterForValue = () => {
  const filters = useSelector<storeType, filterType>(state => state.filterValue);
  const dispatch = useDispatch();

  enum Title {
    form = 'Форма:',
    color = 'Цвет:',
    size = 'Размер:',
    favorite = 'Только любимые:',

  }

  // Принимаем фильтр который установил пользователь
  const changeFiler = useCallback((key: keyType, name: string, isActive: boolean) => {
    switch (key) {
      case Property.shape:
        return dispatch(changeForm({ name, isActive }));
      case Property.color:
        return dispatch(changeColor({ name, isActive }));
      case Property.size:
        return dispatch(changeSize({ name, isActive }));
      case Property.favorite:
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
      {createBlock(Property.shape, Title.form, filters.shape)}
      {createBlock(Property.color, Title.color, filters.color)}
      {createBlock(Property.size, Title.size, filters.size)}
      {createBlock(Property.favorite, Title.favorite, filters.favorite)}
    </div>
  );
};
