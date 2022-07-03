import * as React from 'react';
import { FC, useCallback } from 'react';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import style from '../style/styleRange.module.css';

function valuetext(value: number) {
  return `${value}`;
}

type RangeSliderType = {
  currentValue: number[];
  AC: ActionCreatorWithPayload<{ newValue: number[] }>;
  max: number;
  min: number;
};

export const RangeSlider: FC<RangeSliderType> = React.memo(props => {
  const { currentValue, AC, max, min } = props;
  const dispatch = useDispatch();
  const [start, end] = currentValue;

  const handleChange = useCallback(
    (event: Event, value: number | number[]) => {
      const newValue = value as number[];

      dispatch(AC({ newValue }));
    },
    [dispatch],
  );

  return (
    <div>
      <span className={style.count}>{start}</span>
      <Box sx={{ width: 230 }}>
        <Slider
          min={min}
          max={max}
          getAriaLabel={() => 'get range'}
          value={currentValue}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
      </Box>
      <span className={style.count}>{end}</span>
    </div>
  );
});
