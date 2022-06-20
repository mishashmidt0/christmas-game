import React, {ChangeEvent, useEffect} from 'react';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import {alpha, styled} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import {Button, Grid, IconButton} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {storeType} from "../../store/redux";
import {Dispatch} from "@reduxjs/toolkit";
import {changeSearch} from "../../store/filterRangeAndSortSlice";
import s from "./style.module.css"
const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'white',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export const Header = () => {
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
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}
