import React, { useCallback } from 'react';

import music from '../../../data/assets/audio/audio.mp3';
import audio from '../../../data/assets/svg/audio.svg';
import mute from '../../../data/assets/svg/mute.svg';
import { useAppDispatch, useAppSelector } from '../../../store/redux';
import { ReturnComponentType } from '../../../types';
import { changeIsSound } from '../slice/ChristmasTreeSlice-slice';

import './style/animationSnow.css';
import { Snowflakes } from './SnowComponents/Snowflakes';
import style from './style/SnowAndSound.module.css';

const ChristmasSound = new Audio(music);

export const SnowAudioComponent = (): ReturnComponentType => {
  const dispatch = useAppDispatch();
  const isSound = useAppSelector(state => state.tree.isSound);

  const isPlaySound = useCallback((): void => {
    dispatch(changeIsSound(!isSound));

    (!isSound ? ChristmasSound.play : ChristmasSound.pause)();
  }, [isSound]);

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
          alt="ChristmasSound"
          className={isSound ? style.ActiveButton : style.inActiveButton}
        />
      </button>

      <Snowflakes />
    </div>
  );
};
