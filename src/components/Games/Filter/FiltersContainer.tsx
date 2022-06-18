import React from 'react';
import {FilterForValue} from "./FilterForValue";
import {FilterForRange} from "./FilterForRange";
import s from "./style/styleFilters.module.css"

export const FiltersContainer = () => {
    return (
        <div className={s.container}>
            <FilterForValue/>
            <FilterForRange/>
        </div>
    );
};

