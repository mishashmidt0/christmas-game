import React, {useCallback} from 'react';
import s from "./style/styleRange.module.css"
import {useDispatch, useSelector} from "react-redux";
import {storeType} from "../../../store/redux";
import {changeColor, changeFavorite, changeForm, changeSize, filterType, keyType, valueType} from "../../../store/filterSlice";

export const FilterForRange = React.memo(() => {
    const filters = useSelector<storeType, filterType>(state => state.filters)
    const dispatch = useDispatch()

    const changeFiler = (key: keyType, name: string, isActive: boolean) => {
        switch (key) {
            case "form":
                return dispatch(changeForm({name, isActive}));
            case "color":
                return dispatch(changeColor({name, isActive}));
            case "size":
                return dispatch(changeSize({name, isActive}));
            case "favorite":
                return dispatch(changeFavorite({name, isActive}));
        }
    }


    const createLine = useCallback((arr: valueType[], key: keyType) => arr.map((el, i) =>
        <button key={i} className={el.isActive ? s.active : s.diActive} data-filter={el.name} onClick={() => changeFiler(key, el.name, !el.isActive)}/>
    ), [filters])


    const createBlock = (key: keyType, title: string, arr: valueType[]) => {
        return <div className={s[key]}>
            <>{title}</>
            {createLine(arr, key)}
        </div>
    }

    return (
        <div className={s.container}>
            <h3>Фильтр по диапазону</h3>

            {createBlock("form", "Количество экземпляров:", filters.form)}
            {createBlock("color", "Год приобретения:", filters.color)}

        </div>
    );
});

