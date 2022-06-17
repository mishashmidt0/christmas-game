import React, {useCallback} from 'react';
import s from "./style.module.css"
import {useSelector} from "react-redux";
import {storeType} from "../../../store/redux";
import {filterType, valueType} from "../../../store/filter-slice";

export const FilterForValue = React.memo(() => {
    const filters = useSelector<storeType, filterType>(state => state.filters)


    const createLine = useCallback((arr: valueType[]) => arr.map((el, i) =>
        <button key={i} className={el.isActive ? s.active : s.diActive} data-filter={el.name} onClick={() => {
        }}/>
    ), [filters])


    const createBlock = (style: string, title: string, arr: valueType[]) => {
        return <div className={s[style]}>
            <>{title}</>
            {createLine(arr)}
        </div>
    }

    return (
        <div className={s.container}>
            <h3>Фильтр по значению</h3>

            {createBlock("form", "Форма:", filters.form)}
            {createBlock("color", "Цвет:", filters.color)}
            {createBlock("size", "Размер:", filters.size)}
            {createBlock("favorite", " Только любимые:", filters.favorite)}

        </div>
    );
});

