import React, {useEffect} from 'react';
import s from "./styleCards.module.css"
import {useDispatch} from "react-redux";


export const Cards = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCards())
    }, [])

    return (
        <div>
            {}
        </div>
    );
};

