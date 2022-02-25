import { SelectChangeEvent } from "@mui/material/Select";

export interface FormControlResultsProps {
  handleChangeResultsCount: (event: SelectChangeEvent) => void;
  resultsCount: string;
}

export interface FormControlNationProps {
  handleChangeNation: (event: SelectChangeEvent) => void;
  nation: string;
}
