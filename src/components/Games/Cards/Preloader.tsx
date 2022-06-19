import React from 'react';
import preloader from "../../../data/preloader.svg"
import s from "./styleCards.module.css"

export const Preloader = React.memo(() => {
    return (
        <div className={s.preloader}>
            <img src={preloader} alt="preloader"/>
        </div>
    );
});

