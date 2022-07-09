import React, { useCallback, useEffect } from 'react';

import snow from '../../../../data/assets/svg/snow.svg';
import { useAppDispatch, useAppSelector } from '../../../../store/redux';
import { ReturnComponentType } from '../../../../types';
import { balanceCheck } from '../../t10-constant/constant';
import { SnowStyle } from '../../t11-enums/enums';
import { changeIsSnow } from '../../t8-slice/ChristmasTreeSlice-slice';
import style from '../style/SnowAndSound.module.css';
import { changeSnowAnimation, snowflakes } from '../util/utils-Snowflaks';

export const Snowflakes = (): ReturnComponentType => {
  const dispatch = useAppDispatch();
  const isSnow = useAppSelector(state => state.tree.isSnow);

  const isPlaySnow = useCallback((): void => {
    dispatch(changeIsSnow(!isSnow));
  }, [isSnow]);

  useEffect(() => {
    const snow = document.querySelector('#snow') as HTMLElement;
    const params: [string, HTMLElement] = isSnow
      ? [SnowStyle.snowfall, snow]
      : [SnowStyle.none, snow];

    changeSnowAnimation(...params);
  }, [isSnow]);

  return (
    <>
      <button
        aria-label="Mute volume"
        type="button"
        onClick={isPlaySnow}
        tabIndex={0}
        onKeyPress={isPlaySnow}
      >
        <img
          src={snow}
          alt={SnowStyle.snow}
          className={isSnow ? style.ActiveButton : style.inActiveButton}
        />
      </button>

      <div className={SnowStyle.snow} id={SnowStyle.snow}>
        {snowflakes.map((snow, index) => (
          <div
            key={snow.id}
            className={SnowStyle.flake}
            style={{
              fontSize: `${snow.fontSize}`,
              animationDuration: `${snow.animationDuration}`,
              animationDelay: `${snow.animationDelay}`,
            }}
          >
            <span className={index % balanceCheck ? SnowStyle.right : SnowStyle.left}>
              {SnowStyle.snowflake}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};
