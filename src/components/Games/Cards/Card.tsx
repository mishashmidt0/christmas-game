import React, {FC} from 'react';
import s from "./styleCards.module.css"

type CardType = {
    name: string
}

export const Card: FC<CardType> = React.memo(({name}) => {
    return (
        <div className={s.container}>
            <h3>{name}</h3>
            <div>
                <img src={`../../data/assets/toys/${1}`} alt="card"/>
                <ul>
                    <li>Количество: {1}</li>
                    <li>Год покупки: {1}</li>
                    <li>Форма: {1}</li>
                    <li>Цвет: {1}</li>
                    <li>Размер: {1}</li>
                    <li>Любимая: {1}</li>
                </ul>
            </div>
        </div>
    );
});

