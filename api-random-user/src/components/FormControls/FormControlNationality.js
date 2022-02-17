import React from 'react';
import { FormControl, Select, InputLabel, MenuItem } from "@mui/material";
import { useLocales } from "../../providers/LocalesProvider/LocalesProviders";

function FormControlNationality({ handleChangeNation, nation }) {
    const { trans } = useLocales();
    return (
        <>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-autowidth-label" >{trans.nat}</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-autowidth-select"
                    value={nation}
                    label={trans.nat}
                    onChange={handleChangeNation}>
                    <MenuItem value={"us"}>US</MenuItem><MenuItem value={"tr"}>TR</MenuItem><MenuItem value={"ir"}>IR</MenuItem>
                    <MenuItem value={"gb"}>GB</MenuItem><MenuItem value={"nz"}>NZ</MenuItem><MenuItem value={"ie"}>IE</MenuItem>
                    <MenuItem value={"br"}>BR</MenuItem><MenuItem value={"nl"}>NL</MenuItem><MenuItem value={"fr"}>FR</MenuItem>
                    <MenuItem value={"fi"}>FI</MenuItem><MenuItem value={"dk"}>DK</MenuItem><MenuItem value={"ch"}>CH</MenuItem>
                    <MenuItem value={"es"}>ES</MenuItem><MenuItem value={"de"}>DE</MenuItem><MenuItem value={"au"}>AU</MenuItem>
                </Select>
            </FormControl>
        </>
    )
}

export default FormControlNationality