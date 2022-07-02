import * as React from 'react';
import { useCallback } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { storeType } from '../../../../store/redux';
import { changeSort } from '../../../../store/filterRangeAndSortSlice';
import { Sort } from '../../Cards/ustilFiltersAndSorting';

export const SelectComponent = React.memo(() => {
  const value = useSelector<storeType, string>(state => state.filter.sort);
  const dispatch = useDispatch();

  const handleChange = useCallback(
    ({ target }: SelectChangeEvent) => {
      dispatch(changeSort({ value: target.value }));
    },
    [],
  );

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 260 }}>
        <InputLabel id='demo-simple-select-autowidth-label'>
          Сортировать по ...
        </InputLabel>
        <Select
          labelId='demo-simple-select-autowidth-label'
          id='demo-simple-select-autowidth'
          value={value}
          onChange={handleChange}
          autoWidth
          label='Сортировка по '
        >
          <MenuItem value=''>
            <em>Отмена</em>
          </MenuItem>
          <MenuItem value={Sort.nameAZ}>По названию от «А» до «Я»</MenuItem>
          <MenuItem value={Sort.nameZA}>По названию от «Я» до «А»</MenuItem>
          <MenuItem value={Sort.ascending}>По количеству по возрастанию</MenuItem>
          <MenuItem value={Sort.descending}>По количеству по убыванию</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
});

