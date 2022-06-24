import * as React from 'react';
import { FC, useCallback } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useDispatch } from 'react-redux';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import s from './style/styleRange.module.css';

function valuetext(value: number) {
  return `${value}`;
}

type RangeSliderType = {
  number: number[];
  AC: ActionCreatorWithPayload<{ newValue: number[] }>;
  max: number;
  min: number;
};

export const RangeSlider: FC<RangeSliderType> = React.memo(({ number, AC, max, min }) => {

  const dispatch = useDispatch();
  const [start, end] = number;

  const handleChange = useCallback(
    (event: Event, value: number | number[]) => {
      const newValue = value as number[];
      dispatch(AC({ newValue }));
    },
    [dispatch],
  );

  return (
    <div>
      <span className={s.count}>{start}</span>
      <Box sx={{ width: 230 }}>
        <Slider
          min={min}
          max={max}
          getAriaLabel={() => 'get range'}
          value={number}
          onChange={handleChange}
          valueLabelDisplay='auto'
          getAriaValueText={valuetext}
        />
      </Box>
      <span className={s.count}>{end}</span>
    </div>
  );
});
