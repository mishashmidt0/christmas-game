import React, { DragEvent } from 'react';

import { useDispatch } from 'react-redux';

import { useAppSelector } from '../../../store/redux';
import { ReturnComponentType } from '../../../types';
import { addActiveToy } from '../t8-slice/ChristmasTreeSlice-slice';
import { activeTree } from '../t9-types/types';

import style from './ChristmasTreeWall.module.css';

export const ChristmasTreeWall = (): ReturnComponentType => {
  const dispatch = useDispatch();
  const activeToy = useAppSelector(state => state.tree.activeToy);
  const takenToy = useAppSelector(state => state.tree.takenToy as activeTree);
  const treeUrl = useAppSelector(state => state.tree.tree);
  const urlBg = useAppSelector(state => state.tree.bg);

  const handleDragOver = (e: DragEvent<HTMLAreaElement>): void => {
    e.preventDefault();
  };

  const handleDrop = (e: DragEvent<HTMLAreaElement>): void => {
    e.preventDefault();
    const toy = {
      ...takenToy,
      style: {
        left: e.pageX - takenToy.shiftX!,
        top: e.pageY - takenToy.shiftY!,
      },
    };

    dispatch(addActiveToy(toy));
  };

  return (
    <div className={style.ChristmasTreeWall} style={{ backgroundImage: `url(${urlBg})` }}>
      <img src={treeUrl} alt="MainTree" useMap="#tree-map" />
      <map name="tree-map">
        <area
          shape="poly"
          coords="0,605,123,695,376,700,494,600,251,0"
          alt="tree"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className={style.areaTree}
        />
      </map>
      {!!activeToy.length &&
        activeToy.map(toy => {
          return (
            <img
              className={style.toyOfTheTree}
              key={toy.id}
              src={toy.url}
              alt="toy"
              style={toy.style as React.CSSProperties}
            />
          );
        })}
    </div>
  );
};
