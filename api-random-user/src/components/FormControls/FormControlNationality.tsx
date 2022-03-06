import React, { memo } from "react";
import { FormControl, Select, InputLabel, MenuItem } from "@mui/material";
import { useLocales } from "../../providers/LocalesProvider/LocalesProviders";
import { FormControlNationProps } from "./FormControlProps.Types";
import { natData } from "./Constants";

const FormControlNationality: React.FC<FormControlNationProps> = ({
  handleChangeNation,
  nation,
}) => {
  const { trans } = useLocales();
  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-autowidth-label">
          {trans.nat}
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-autowidth-select"
          value={nation}
          label={trans.nat}
          onChange={handleChangeNation}
        >
          {natData?.map((nat) => (
            <MenuItem key={nat.index} value={nat.value}>
              {nat.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default memo(FormControlNationality);
