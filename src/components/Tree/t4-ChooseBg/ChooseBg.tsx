import React, { useMemo, useState } from 'react';

import { useAppDispatch } from '../../../store/redux';
import { ReturnComponentType } from '../../../types';
import { ChooseTreeTitle } from '../t11-enums/enums';
import { changeBg } from '../t8-slice/ChristmasTreeSlice-slice';

import style from './style/ChooseBg.module.css';
import { createArrBg } from './util-ChooseBg/util-ChooseBg';

export const ChooseBg = (): ReturnComponentType => {
  const dispatch = useAppDispatch();
  const [active, useActive] = useState<string>('');
  const arrBg = useMemo(() => createArrBg(), []);

  const ChangeBg = (id: string, url: string): void => {
    dispatch(changeBg(url));
    useActive(id);
  };

  return (
    <>
      <h2 className={style.headerTitle}>{ChooseTreeTitle.header}</h2>
      <div className={style.bgTree}>
        {arrBg.map(bg => (
          <div
            role="button"
            tabIndex={0}
            key={bg.id}
            aria-label="button"
            onClick={() => {
              ChangeBg(bg.id, bg.url);
            }}
            onKeyPress={() => {
              ChangeBg(bg.id, bg.url);
            }}
            className={active === bg.id ? style.activeBg : ''}
            style={{ backgroundImage: `url(${bg.url})` }}
          />
        ))}
      </div>
    </>
  );
};
