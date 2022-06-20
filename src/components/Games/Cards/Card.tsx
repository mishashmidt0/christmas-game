import React, {FC} from 'react';
import s from "./styleCards.module.css"
import {cardsType, chooseCard} from "../../../store/cardsSlice";
import {setImage} from "./setImage";
import {useDispatch} from "react-redux";
import {Dispatch} from "@reduxjs/toolkit";


export const Card: FC<cardsType> = React.memo(({num, name, year, color, size, favorite, shape, count, isChoose}) => {
    const dispatch = useDispatch<Dispatch>()
    const dispatchIsChooseCard = () => {
        dispatch(chooseCard({id: num, value: !isChoose}))
    }

    const img = setImage(num)
    return (
        <div className={`${s.containerCard} ${isChoose ? s.active : ""}`}>
            <h3 className={s.cardHeader}>{name}</h3>
            <div className={s.cardDescriptionContainer}>
                <div>
                    <img src={img} alt="card"/>
                    <div className={s.ribbon} onClick={dispatchIsChooseCard}></div>
                </div>
                <ul className={s.cardDescription}>
                    <li>Количество: {count}</li>
                    <li>Год покупки: {year}</li>
                    <li>Форма: {shape}</li>
                    <li>Цвет: {color}</li>
                    <li>Размер: {size}</li>
                    <li>Любимая: {favorite ? "да" : "нет"}</li>
                </ul>
            </div>
        </div>
    );
});

