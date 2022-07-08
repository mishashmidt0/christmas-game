import React, { useCallback, useEffect } from 'react';

import music from '../../../data/assets/audio/audio.mp3';
import audio from '../../../data/assets/svg/audio.svg';
import mute from '../../../data/assets/svg/mute.svg';
import snow from '../../../data/assets/svg/snow.svg';
import { useAppDispatch, useAppSelector } from '../../../store/redux';
import { ReturnComponentType } from '../../../types';
import { changeIsSnow, changeIsSound } from '../slice/ChristmasTreeSlice-slice';

import './animationSnow.css';
import { changeSnowAnimation, snowflakes } from './Snow';
import style from './SnowAndSound.module.css';

const ChristmasSound = new Audio(music);
const two = 2;

export const SnowAudioComponent = (): ReturnComponentType => {
  const dispatch = useAppDispatch();
  const isSnow = useAppSelector(state => state.tree.isSnow);
  const isSound = useAppSelector(state => state.tree.isSound);

  const isPlaySound = useCallback((): void => {
    dispatch(changeIsSound(!isSound));
    // eslint-disable-next-line no-unused-expressions
    !isSound ? ChristmasSound.play() : ChristmasSound.pause();
  }, [isSound]);

  useEffect(() => {
    const snow = document.querySelector('#snow') as HTMLElement;

    const params: [string, HTMLElement] = isSnow ? ['snowfall', snow] : ['false', snow];

    changeSnowAnimation(...params);
  }, [isSnow]);

  const isPlaySnow = useCallback((): void => {
    dispatch(changeIsSnow(!isSnow));
  }, [isSnow]);

  return (
    <div className={style.SnowAndSound}>
      <button
        aria-label="Mute volume"
        type="button"
        onClick={isPlaySound}
        tabIndex={0}
        onKeyPress={isPlaySound}
      >
        <img
          src={isSound ? audio : mute}
          alt="audio"
          className={isSound ? style.ActiveButton : style.inActiveButton}
        />
      </button>

      <button
        aria-label="Mute volume"
        type="button"
        onClick={isPlaySnow}
        tabIndex={0}
        onKeyPress={isPlaySnow}
      >
        <img
          src={snow}
          alt="snow"
          className={isSnow ? style.ActiveButton : style.inActiveButton}
        />
      </button>
      <div className="snow" id="snow">
        {snowflakes.map((snow, index) => (
          <div
            key={snow.id}
            className="snow__flake"
            style={{
              fontSize: `${snow.fontSize}`,
              animationDuration: `${snow.animationDuration}`,
              animationDelay: `${snow.animationDelay}`,
            }}
          >
            <span
              className={index % two ? 'snow__flake-into_right' : 'snow__flake-into_left'}
            >
              *
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
