import React, { useMemo, useState } from 'react';

import { useAppDispatch } from '../../../store/redux';
import { ReturnComponentType } from '../../../types';
import { ChooseTreeTitle } from '../t11-enums/enums';
import { changeTree } from '../t8-slice/ChristmasTreeSlice-slice';

import style from './style/ChooseTree.module.css';
import { createArrTree } from './util-ChooseTree/util-ChooseTree';

export const ChooseTree = (): ReturnComponentType => {
  const arrTree = useMemo(() => createArrTree(), []);
  const [active, useActive] = useState<string>('');
  const dispatch = useAppDispatch();
  const ChoseTree = (id: string, url: string): void => {
    dispatch(changeTree(url));
    useActive(id);
  };

  return (
    <div>
      <h2 className={style.headerTitle}>{ChooseTreeTitle.header}</h2>
      <div className={style.bgTree}>
        {arrTree.map(tree => (
          <div
            role="button"
            tabIndex={0}
            key={tree.id}
            onClick={() => {
              ChoseTree(tree.id, tree.url);
            }}
            onKeyPress={() => {
              ChoseTree(tree.id, tree.url);
            }}
            className={active === tree.id ? style.activeTree : ''}
          >
            <img src={tree.url} alt={ChooseTreeTitle.tree} />
          </div>
        ))}
      </div>
    </div>
  );
};
