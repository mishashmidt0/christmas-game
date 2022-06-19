import React, {useCallback} from 'react';
import s from "./style/styleSort.module.css"
import {Button} from "@mui/material";
import {SelectComponent} from "./select";
import {useDispatch} from "react-redux";
import {changeSort, resetRange} from "../../../store/filterRangeAndSortSlice";
import {resetValue} from "../../../store/filterValueSlice";

export const FilterSort = React.memo(() => {
    const dispatch = useDispatch()

    const reset = useCallback(() => {
        dispatch(changeSort({value: ""}))
        dispatch(resetValue())
        dispatch(resetRange())
    }, [dispatch])

    return (
        <div className={s.container}>
            <h3>Сортировка</h3>
            <SelectComponent/>

            <Button variant="contained" color={"primary"} onClick={reset}>Сброс фильтров</Button>
        </div>
    );
});

