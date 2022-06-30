import React, { useCallback } from 'react';
import style from './style/styleValue.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { storeType } from '../../../store/redux';
import { changeColor, changeFavorite, changeForm, changeSize, filterType, keyType, Property, valueType } from '../../../store/filterValueSlice';

export const FilterForValue = () => {
  const filters = useSelector<storeType, filterType>(state => state.filterValue);
  const dispatch = useDispatch();

  enum TitleValue {
    shape = 'Форма:',
    color = 'Цвет:',
    size = 'Размер:',
    favorite = 'Только любимые:',

  }

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
    }
  }, []);

  const createBlock = useCallback(
    (key: keyType, title: string, arr: valueType[]) => {
      return (
        <div className={style[key]}>
          <>{title}</>
          {arr.map((el, i) => (
            <button
              key={i}
              className={el.isActive ? style.activeButton : style.inActiveButton}
              data-filter={el.name}
              onClick={() => changeFilter(key, el.name, !el.isActive)}
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
      {createBlock(Property.shape, TitleValue.shape, filters.shape)}
      {createBlock(Property.color, TitleValue.color, filters.color)}
      {createBlock(Property.size, TitleValue.size, filters.size)}
      {createBlock(Property.favorite, TitleValue.favorite, filters.favorite)}
    </div>
  );
};
