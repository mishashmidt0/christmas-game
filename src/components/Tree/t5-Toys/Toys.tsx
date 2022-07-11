import React, { DragEvent, useMemo } from 'react';

import { useAppDispatch, useAppSelector } from '../../../store/redux';
import { ReturnComponentType } from '../../../types';
import { ToysTitle } from '../t11-enums/enums';
import { takenToy } from '../t8-slice/ChristmasTreeSlice-slice';
import { treeArrType } from '../t9-types/types';

import style from './style/Toys.module.css';
import { createMyBasketOfToys } from './util-Toys/util-toys';

export const Toys = (): ReturnComponentType => {
  const dispatch = useAppDispatch();
  const toys = useAppSelector(state => state.cards);

  const handleDragStart = (event: DragEvent<HTMLElement>, toy: treeArrType): void => {
    event.dataTransfer.setData('action', 'add');
    const img = (event.nativeEvent as any).path[0];
    const shiftX = event.clientX - img.getBoundingClientRect().left;
    const shiftY = event.clientY - img.getBoundingClientRect().top;
    const moveToy = {
      ...toy,
      shiftX,
      shiftY,
    };

    dispatch(takenToy(moveToy));
  };

  const myBasketOfToys = useMemo(() => createMyBasketOfToys(toys), [toys]);

  return (
    <div>
      <h2>{ToysTitle.header}</h2>
      <div className={style.ToysContainer}>
        {myBasketOfToys.length ? (
          myBasketOfToys.map(toy => (
            <div role="button" tabIndex={0} key={toy.id} aria-label="button">
              {!!Number(toy.count) && (
                <img
                  src={toy.url}
                  alt="toy"
                  draggable
                  onDragStart={event => handleDragStart(event, toy)}
                />
              )}

              <span className={style.ToyCount}>{toy.count}</span>
            </div>
          ))
        ) : (
          <h2>{ToysTitle.warning}</h2>
        )}
      </div>
    </div>
  );
};
