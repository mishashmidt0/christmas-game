import React, { DragEvent, useState } from 'react';

import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { useAppSelector } from '../../../store/redux';
import { ReturnComponentType } from '../../../types';
import {
  addedTheNumberOfOneToy,
  removeTheNumberOfOneToy,
} from '../../Games/slice/cardsSlice';
import {
  addToyOnTheTree,
  deleteToyOnTheTree,
  moveToyOnTheTree,
} from '../t8-slice/ChristmasTreeSlice-slice';
import { activeTree } from '../t9-types/types';

import style from './ChristmasTreeWall.module.css';

export const ChristmasTreeWall = (): ReturnComponentType => {
  const dispatch = useDispatch();
  const [left, useLeft] = useState(false);
  const toysOnTheTreeArr = useAppSelector(state => state.tree.toysOnTheTree);
  const takenToy = useAppSelector(state => state.tree.takenToy as activeTree);
  const treeUrl = useAppSelector(state => state.tree.tree);
  const urlBg = useAppSelector(state => state.tree.bg);

  const handleDragOver = (e: DragEvent<HTMLAreaElement>): void => {
    e.preventDefault();
  };

  const HandleDragEnter = (): void => {
    useLeft(false);
  };

  const handleDragStart = (event: DragEvent<HTMLElement>, id: string): void => {
    event.dataTransfer.setData('action', 'move');
    event.dataTransfer.setData('id', id);
    const img = (event.nativeEvent as any).path[0];
    const shiftX = event.clientX - img.getBoundingClientRect().left;
    const shiftY = event.clientY - img.getBoundingClientRect().top;
    const distance = JSON.stringify({ shiftX, shiftY });

    event.dataTransfer.setData('mouseClickDistance', distance);
  };

  const HandleDragLeave = (): void => {
    useLeft(true);
  };
  const handleDragEnd = (id: string, num: string): void => {
    if (left) {
      dispatch(deleteToyOnTheTree(id));
      dispatch(addedTheNumberOfOneToy(num));
    }
  };

  const handleDrop = (event: DragEvent<HTMLAreaElement>): void => {
    event.preventDefault();
    const action = event.dataTransfer.getData('action');

    switch (action) {
      case 'add': {
        const toy = {
          ...takenToy,
          id: uuidv4(),
          style: {
            left: event.pageX - takenToy.shiftX!,
            top: event.pageY - takenToy.shiftY!,
          },
        };

        dispatch(removeTheNumberOfOneToy(takenToy.num));
        dispatch(addToyOnTheTree(toy));
        break;
      }
      case 'move': {
        const id = event.dataTransfer.getData('id');
        const distance = event.dataTransfer.getData('mouseClickDistance');
        const { shiftX, shiftY } = JSON.parse(distance);
        const style = {
          left: event.pageX - shiftX!,
          top: event.pageY - shiftY!,
        };

        dispatch(moveToyOnTheTree({ id, style }));
        break;
      }
      default:
        break;
    }
  };

  return (
    <div
      id="capture"
      className={style.ChristmasTreeWall}
      style={{ backgroundImage: `url(${urlBg})` }}
    >
      <img src={treeUrl} alt="MainTree" useMap="#tree-map" />
      <map name="tree-map">
        <area
          shape="poly"
          coords="2,600,219,8,314,0,491,528,489,659,136,706,53,669"
          alt="tree"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onDragLeave={HandleDragLeave}
          onDragEnter={HandleDragEnter}
          className={style.areaTree}
        />
      </map>
      {!!toysOnTheTreeArr.length &&
        toysOnTheTreeArr.map(toy => {
          return (
            <img
              className={style.toyOfTheTree}
              key={toy.id}
              src={toy.url}
              alt="toy"
              style={toy.style as React.CSSProperties}
              draggable
              onDragStart={event => handleDragStart(event, toy.id)}
              onDragEnd={() => handleDragEnd(toy.id, toy.num)}
            />
          );
        })}
    </div>
  );
};
