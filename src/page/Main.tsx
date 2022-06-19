import React, {useEffect} from 'react';
import s from "./style/mainStyle.module.css"
import {Button, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

export const Main = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const app = document.querySelector('.App')
        if (app) app.classList.add("hidden")
        return () => {
            if (app) app.classList.remove("hidden")
        }

    })

    return (
        <div className={s.containerMain}>
            <div className={s.cardMain}>
                <Typography variant="subtitle2" display="block" gutterBottom fontSize={"34px"} fontWeight={"bold"} color={"white"}>
                    Новогодняя игра!
                </Typography>
                <Typography variant="subtitle2" display="block" gutterBottom fontSize={"34px"} fontWeight={"bold"} color={"white"}>
                    «Наряди ёлку»
                </Typography>
            </div>
            <Button variant="contained" onClick={() => navigate("/games")}>Играть</Button>
        </div>
    );
};

