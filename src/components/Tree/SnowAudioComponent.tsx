import React, { useState } from 'react';

import audio from '../../data/assets/svg/audio.svg';
import mute from '../../data/assets/svg/mute.svg';
import snow from '../../data/assets/svg/snow.svg';
import { ReturnComponentType } from '../../types';

export const SnowAudioComponent = (): ReturnComponentType => {
  const [play, setPlay] = useState(false);

  const isPlaySound = (): void => {
    setPlay(!play);
  };

  return (
    <div>
      <input
        role="button"
        src={play ? audio : mute}
        alt="audio"
        onClick={isPlaySound}
        tabIndex={0}
        onKeyPress={isPlaySound}
      />
      <img src={snow} alt="snow" />
      <img src={snow} alt="snow" />
    </div>
  );
};
