import React, {FC} from 'react';
import s from "./styleCards.module.css"
import {dataType} from "../../../store/cardsSlice";


export const Card: FC<dataType> = React.memo(({num, name, year, color, size, favorite, shape, count}) => {

    const img = require(`../../../data/assets/toys/${num}.png`)

    return (
        <div className={s.containerCard}>
            <h3 className={s.cardHeader}>{name}</h3>
            <div className={s.cardDescriptionContainer}>
                <div>
                    <img src={img} alt="card"/>
                    <div className={s.ribbon}></div>
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

