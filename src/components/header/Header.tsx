import React, { ChangeEvent } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import { Grid } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Dispatch } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import { changeSearch } from '../../store/filterRangeAndSortSlice';
import { storeType } from '../../store/redux';
import { ReturnComponentType } from '../../types';

import { ButtonHeader } from './components/ButtonHeader';
import style from './style.module.css';
import { Search, SearchIconWrapper, StyledInputBase } from './utilHeaderFunc';

export const Header = React.memo((): ReturnComponentType => {
  const activeToys = useSelector<storeType, number>(state => state.app.activeToys);
  const dispatch = useDispatch<Dispatch<any>>();
  const search = useSelector<storeType, string>(state => state.filter.search);

  const dispatchSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    dispatch(changeSearch({ value: e.currentTarget.value }));
  };

  return (
    <div className={style.container}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="regular">
            <Grid container>
              <ButtonHeader />
            </Grid>

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                value={search}
                onChange={dispatchSearch}
              />
            </Search>
            <div className={style.select}>
              <span>{activeToys}</span>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
});
