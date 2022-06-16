import React from 'react';
import s from "./style/mainStyle.module.css"
import {Button, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

export const Main = () => {
    const navigate = useNavigate();

    return (
        <div className={s.container}>
            <div className={s.card}>
                <Typography variant="subtitle2" display="block" gutterBottom fontSize={"34px"} fontWeight={"bold"} color={"white"}>
                    Новогодняя игра!
                </Typography>
                <Typography variant="subtitle2" display="block" gutterBottom fontSize={"34px"} fontWeight={"bold"} color={"white"}>
                    «Наряди ёлку»
                </Typography>
            </div>
            <Button variant="contained" onClick={()=>navigate("/games")}>Играть</Button>
        </div>
    );
};

