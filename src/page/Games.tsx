import React from 'react';
import {FiltersContainer} from "../components/Games/Filter/FiltersContainer";
import {Cards} from "../components/Games/Cards/Cards";
import s from "./style/mainStyle.module.css"

export const Games = React.memo(() => {

    return (
        <div className={s.gamesContainer}>
            <FiltersContainer/>
            <Cards/>
        </div>
    );
});

