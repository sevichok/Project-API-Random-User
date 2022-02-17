import React from 'react';
import { FormControl, Select, InputLabel, MenuItem } from "@mui/material";
import { useLocales } from "../../providers/LocalesProvider/LocalesProviders";

function FormControlResults({ handleChangeResultsCount, resultsCount }) {
    const { trans } = useLocales();
    return (
        <>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-autowidth-label">{trans.res}</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-autowidth-select"
                    value={resultsCount}
                    label={trans.res}
                    onChange={handleChangeResultsCount}>
                    <MenuItem value={2}>2</MenuItem><MenuItem value={4}>4</MenuItem><MenuItem value={6}>6</MenuItem>
                    <MenuItem value={8}>8</MenuItem><MenuItem value={10}>10</MenuItem><MenuItem value={15}>15</MenuItem>
                    <MenuItem value={20}>20</MenuItem><MenuItem value={50}>50</MenuItem>
                </Select>
            </FormControl>
        </>
    )
}

export default FormControlResults