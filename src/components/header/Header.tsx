import React, {ChangeEvent} from 'react';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import {Button, Grid, IconButton} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {storeType} from "../../store/redux";
import {Dispatch} from "@reduxjs/toolkit";
import {changeSearch} from "../../store/filterRangeAndSortSlice";
import s from "./style.module.css"
import {Search, SearchIconWrapper, StyledInputBase} from "./utilHeaderFunc"


export const Header = React.memo(() => {
    const activeToys = useSelector<storeType, number>(state => state.app.activeToys)
    const dispatch = useDispatch<Dispatch<any>>()
    const navigate = useNavigate();
    const search = useSelector<storeType, string>(state => state.filter.search)
    const dispatchSearch = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeSearch({value: e.currentTarget.value}))
    }

    return (<div className={s.container}>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar variant={"regular"}>
                        <Grid container>
                            <IconButton onClick={() => navigate("/")} color={"inherit"}>
                                <AcUnitIcon color={"inherit"} fontSize={"large"}/>
                            </IconButton>

                            <Button variant="text" color={"inherit"} onClick={() => navigate("/games")}>ИГРУШКИ</Button>
                            <Button variant="text" color={"inherit"} onClick={() => navigate("/ChristmasTree")}>ЁЛКА</Button>
                        </Grid>

                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon/>
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{'aria-label': 'search'}}
                                value={search}
                                onChange={dispatchSearch}
                            />
                        </Search>
                        <div className={s.select}><span>{activeToys}</span></div>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
})
