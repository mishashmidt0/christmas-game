import React, {useCallback, useEffect} from 'react';
import {FiltersContainer} from "../components/Games/Filter/FiltersContainer";
import {Cards} from "../components/Games/Cards/Cards";
import s from "./style/mainStyle.module.css"

export const Games = () => {




    const scroll = useCallback(() => {
        console.log(window.scrollY)
        if(window.scrollY> 90){

        }
    },[])

    useEffect(() => {
        window.addEventListener("scroll", scroll)
        return () => {
            window.removeEventListener("scroll", scroll)
        }
    })


    return (
        <div className={s.gamesContainer}>
            <FiltersContainer/>
            <Cards/>
        </div>
    );
};

