import React from "react";
import { FormControl, Select, InputLabel, MenuItem } from "@mui/material";
import { useLocales } from "../../providers/LocalesProvider/LocalesProviders";
import { FormControlNationProps } from "./FormControlProps.Types";

const natData = [
  { title: "US", value: "us", index: 1 },
  { title: "GB", value: "gb", index: 2 },
  { title: "TR", value: "tr", index: 3 },
  { title: "IR", value: "ir", index: 4 },
  { title: "NZ", value: "nz", index: 5 },
  { title: "IE", value: "ie", index: 6 },
  { title: "BR", value: "br", index: 7 },
  { title: "NL", value: "nl", index: 8 },
  { title: "FR", value: "fr", index: 9 },
  { title: "FI", value: "fi", index: 10 },
  { title: "DK", value: "dk", index: 11 },
  { title: "CH", value: "ch", index: 12 },
  { title: "ES", value: "es", index: 13 },
  { title: "DE", value: "de", index: 14 },
  { title: "AU", value: "au", index: 15 },
];

export interface NatTypes {
  title: string;
  value: string;
  index: number;
}

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

export default FormControlNationality;
