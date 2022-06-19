import React, {useEffect} from 'react';
import s from "./styleCards.module.css"
import {useDispatch, useSelector} from "react-redux";
import {setCardsTC} from "../../../store/cardsSlice";
import {Dispatch} from "@reduxjs/toolkit";
import {storeType} from "../../../store/redux";
import {Preloader} from "./Preloader";
import {Card} from "./Card";
import {allFilters, search, sort} from "./ustilFiltersAndSorting";


export const Cards = React.memo(() => {
    const dispatch = useDispatch<Dispatch<any>>()
    const {cards, filterValue, filter} = useSelector<storeType, storeType>(state => state)

    useEffect(() => {
        dispatch(setCardsTC())
    }, [])


    const filteredArr = cards.filter(card => {
        return allFilters(card, filterValue, filter)
    })

    const sorting = sort(filteredArr, filter.sort)

    const searching = search(sorting, filter.search)

    if (!cards.length) return <Preloader/>
    return (
        <div className={s.containerCards}>
            {searching.map((c => <Card {...c} key={c.num}/>))}
        </div>
    );
});

