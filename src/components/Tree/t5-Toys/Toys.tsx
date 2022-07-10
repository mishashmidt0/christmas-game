import React, { DragEvent, useMemo } from 'react';

import { useAppDispatch, useAppSelector } from '../../../store/redux';
import { ReturnComponentType } from '../../../types';
import { ToysTitle } from '../t11-enums/enums';
import { takenToy } from '../t8-slice/ChristmasTreeSlice-slice';
import { treeArrType } from '../t9-types/types';

import style from './style/Toys.module.css';
import { createArrToys } from './util-Toys/util-toys';

export const Toys = (): ReturnComponentType => {
  const dispatch = useAppDispatch();
  const toys = useAppSelector(state => state.cards);

  const arrToys = useMemo(() => createArrToys(toys), [toys]);

  const handleDrag = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
  };

  const handleDragStart = (event: DragEvent<HTMLElement>, toy: treeArrType): void => {
    const img = (event.nativeEvent as any).path[0];
    const shiftX = event.clientX - img.getBoundingClientRect().left;
    const shiftY = event.clientY - img.getBoundingClientRect().top;
    const moveoToy = {
      ...toy,
      shiftX,
      shiftY,
    };

    dispatch(takenToy(moveoToy));
  };

  return (
    <div>
      <h2>{ToysTitle.header}</h2>
      <div className={style.ToysContainer}>
        {arrToys.length ? (
          arrToys.map(toy => (
            <div role="button" tabIndex={0} key={toy.id} aria-label="button">
              <img
                src={toy.url}
                alt="toy"
                draggable
                onDrag={handleDrag}
                onDragStart={event => handleDragStart(event, toy)}
              />
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
