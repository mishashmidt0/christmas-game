import React, {useEffect} from 'react';
import s from "./styleCards.module.css"
import {useDispatch, useSelector} from "react-redux";
import {dataType, keyDataType, setCardsTC} from "../../../store/cardsSlice";
import {Dispatch} from "@reduxjs/toolkit";
import {storeType} from "../../../store/redux";
import {Preloader} from "./Preloader";
import {Card} from "./Card";
import {keyType} from "../../../store/filterValueSlice";
import {keyRangeType} from "../../../store/filterRangeAndSortSlice";


export const Cards = React.memo(() => {


    const dispatch = useDispatch<Dispatch<any>>()
    const {cards, filterValue, filter} = useSelector<storeType, storeType>(state => state)


    useEffect(() => {
        dispatch(setCardsTC())
    }, [])


    const searchIsActiveItem = (key: keyType) => {
        return filterValue[key].filter((f) => f.isActive === true)
    }

    const filterValues = (card: dataType, key: keyType): boolean => {
        const formArr = searchIsActiveItem(key)
        if (formArr.length && key === "favorite") return !!formArr.find((item) => item.isActive === card[key])
        if (formArr.length) return !!formArr.find((item) => item.name === card[key])
        return true
    }

    const filterRange = (card: dataType, key: keyRangeType) => {
        const [start, end] = filter[key] as number[]
        return (+card[key as keyDataType] >= start && +card[key as keyDataType] <= end)
    }

    const allFilters = (card: dataType): boolean => {
        if (
            filterValues(card, "shape") &&
            filterValues(card, "color") &&
            filterValues(card, "size") &&
            filterValues(card, "favorite") &&
            filterRange(card, "count") &&
            filterRange(card, "year")
        ) return true

        return false
    }

    const filteredArr = cards.filter(card => {
        return allFilters(card)
    })


    const sort = () => {
        switch (filter.sort.toString()) {
            case "10":
                return filteredArr.sort((a, b) => {
                    return (a.name > b.name) ? 1 : -1
                })
            case "21":
                return filteredArr.sort((a, b) => {
                    return (a.name < b.name) ? 1 : -1
                })


            case "22":
                return filteredArr.sort((a, b) => {
                    return +a.count - +b.count
                })
            case "23":
                return filteredArr.sort((a, b) => {
                    return +b.count - +a.count
                })
            default:
                return filteredArr
        }
    }


    if (!cards.length) return <Preloader/>
    return (
        <div className={s.containerCards}>
            {sort().map((c => <Card {...c} key={c.num}/>))}
        </div>
    );
});

