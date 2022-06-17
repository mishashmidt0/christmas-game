import React from 'react';
import {FiltersContainer} from "../components/Games/Filter/FiltersContainer";
import {Cards} from "../components/Games/Cards";

export const Games = () => {
    return (
        <div>
            <FiltersContainer/>
            <Cards/>
        </div>
    );
};

