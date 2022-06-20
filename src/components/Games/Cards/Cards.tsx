import React, {useEffect, useMemo} from 'react';
import s from "./styleCards.module.css"
import {useDispatch, useSelector} from "react-redux";
import {cardsType, setCardsTC} from "../../../store/cardsSlice";
import {Dispatch} from "@reduxjs/toolkit";
import {storeType} from "../../../store/redux";
import {Preloader} from "./Preloader";
import {Card} from "./Card";
import {allFilters, search, sort} from "./ustilFiltersAndSorting";
import {filterType} from "../../../store/filterValueSlice";
import {filterRangeAndSortType} from "../../../store/filterRangeAndSortSlice";


export const Cards = () => {
    const dispatch = useDispatch<Dispatch<any>>()
    const cards = useSelector<storeType, cardsType[]>(state => state.cards)
    const filterValue = useSelector<storeType, filterType>(state => state.filterValue)
    const filter = useSelector<storeType, filterRangeAndSortType>(state => state.filter)

    useEffect(() => {
        dispatch(setCardsTC())
    }, [])


    const filteredArr = useMemo(() => cards.filter(card => {
        return allFilters(card, filterValue, filter)
    }), [cards, filterValue, filter.count, filter.year])

    const sorting = useMemo(() => sort(filteredArr, filter.sort), [filteredArr, filter.sort])

    const searching = useMemo(() => search(sorting, filter.search), [filteredArr, filter.search])

    if (!cards.length) return <Preloader/>
    return (
        <div className={s.containerCards}>
            {searching.map((c => <Card {...c} key={c.num}/>))}
        </div>
    );
};

