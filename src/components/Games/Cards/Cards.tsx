import React, {useEffect} from 'react';
import s from "./styleCards.module.css"
import {useDispatch} from "react-redux";
import {setCardsTC} from "../../store/cardsSlice";
import {Dispatch} from "@reduxjs/toolkit";


export const Cards = () => {
    const dispatch = useDispatch<Dispatch<any>>()

    useEffect(() => {
        dispatch(setCardsTC())
    }, [])

    return (
        <div>
            {}
        </div>
    );
};

