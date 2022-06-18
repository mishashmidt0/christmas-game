import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {useDispatch, useSelector} from "react-redux";
import {storeType} from "../../../store/redux";
import {changeSort} from "../../../store/filterRangeAndSortSlice";

export const SelectComponent = React.memo(() => {
    const value = useSelector<storeType, string>(state => state.filter.sort)
    const dispatch = useDispatch()

    const handleChange = (event: SelectChangeEvent) => {
        dispatch(changeSort({value: event.target.value}))
    };

    return (
        <div>
            <FormControl sx={{m: 1, minWidth: 260}}>
                <InputLabel id="demo-simple-select-autowidth-label">Сортировать по ...</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={value}
                    onChange={handleChange}
                    autoWidth
                    label="Сортировка по ">
                    <MenuItem value="">
                        <em>Отмена</em>
                    </MenuItem>
                    <MenuItem value={10}>По названию от «А» до «Я»</MenuItem>
                    <MenuItem value={21}>По названию от «Я» до «А»</MenuItem>
                    <MenuItem value={22}>По количеству по возрастанию</MenuItem>
                    <MenuItem value={23}>По количеству по убыванию</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
})
