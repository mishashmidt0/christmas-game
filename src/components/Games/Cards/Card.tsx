import React, { useCallback } from 'react';

import { Dispatch } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import { changeActiveToys } from '../../../store/appSlice';
import { cardsType, chosenCard } from '../../../store/cardsSlice';
import { storeType } from '../../../store/redux';
import { ReturnComponentType } from '../../../types';

import { setImage } from './setImage';
import style from './styleCards.module.css';

export const Card = React.memo((props: cardsType): ReturnComponentType => {
  const { num, name, year, color, size, favorite, shape, count, isChosen } = props;

  const dispatch = useDispatch<Dispatch>();
  const activeToys = useSelector<storeType, number>(state => state.app.activeToys);

  const dispatchIsChosenCard = useCallback(() => {
    dispatch(chosenCard({ id: num, value: !isChosen }));

    return !isChosen
      ? dispatch(changeActiveToys({ value: activeToys + 1 }))
      : dispatch(changeActiveToys({ value: activeToys - 1 }));
  }, [isChosen, activeToys]);

  const img = setImage(num);

  return (
    <div className={`${style.containerCard} ${isChosen ? style.active : ''}`}>
      <h3 className={style.cardHeader}>{name}</h3>
      <div className={style.cardDescriptionContainer}>
        <img src={img} alt="card" />
        <div
          role="button"
          className={style.ribbon}
          onClick={dispatchIsChosenCard}
          onKeyDown={dispatchIsChosenCard}
          tabIndex={0}
          aria-label="fdf"
        />

        <ul className={style.cardDescription}>
          <li>Количество: {count}</li>
          <li>Год покупки: {year}</li>
          <li>Форма: {shape}</li>
          <li>Цвет: {color}</li>
          <li>Размер: {size}</li>
          <li>Любимая: {favorite ? 'да' : 'нет'}</li>
        </ul>
      </div>
    </div>
  );
});
