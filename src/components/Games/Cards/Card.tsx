import React, { FC, useCallback } from 'react';
import style from './styleCards.module.css';
import { cardsType, chosenCard } from '../../../store/cardsSlice';
import { setImage } from './setImage';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';
import { changeActiveToys } from '../../../store/appSlice';
import { storeType } from '../../../store/redux';

export const Card: FC<cardsType> = React.memo(
  (props) => {
    const { num, name, year, color, size, favorite, shape, count, isChosen } = props;

    const dispatch = useDispatch<Dispatch>();
    let activeToys = useSelector<storeType, number>(state => state.app.activeToys);

    const dispatchIsChosenCard = useCallback(() => {
      dispatch(chosenCard({ id: num, value: !isChosen }));

      !isChosen ? dispatch(changeActiveToys({ value: ++activeToys }))
        : dispatch(changeActiveToys({ value: --activeToys }));

    }, [isChosen, activeToys]);

    const img = setImage(num);

    return (
      <div className={`${style.containerCard} ${isChosen ? style.active : ''}`}>
        <h3 className={style.cardHeader}>{name}</h3>
        <div className={style.cardDescriptionContainer}>

          <img src={img} alt='card' />
          <div className={style.ribbon} onClick={dispatchIsChosenCard}></div>

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
  },
);
