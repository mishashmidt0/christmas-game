import React, {useCallback} from 'react';
import s from "./style/styleRange.module.css"
import {useSelector} from "react-redux";
import {storeType} from "../../../store/redux";
import {RangeSlider} from "./range";
import {changeAmount, changeYear} from "../../../store/filterRangeAndSortSlice";
import {ActionCreatorWithPayload} from "@reduxjs/toolkit";

export const FilterForRange = () => {

    const {year, count} = useSelector<storeType, { year: number[], count: number[] }>(state => state.filter)

    const createBlock = useCallback((title: string,
                                     number: number[],
                                     AC: ActionCreatorWithPayload<{ newValue: number[] }>,
                                     max: number,
                                     min: number) => <div className={s.block}>
        <p>{title}</p>
        <RangeSlider number={number} AC={AC} max={max} min={min}/>
    </div>, [])


    return (
        <div className={s.container}>
            <h3>Фильтр по диапазону</h3>
            {createBlock("Количество экземпляров:", count, changeAmount, 12, 1)}
            {createBlock("Год приобретения:", year, changeYear, 2020, 1940)}
        </div>
    );
};

