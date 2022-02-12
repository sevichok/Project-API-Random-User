import {
  Stack, Container, Typography, Pagination, FormGroup, FormControlLabel, Switch,
  FormControl, InputLabel, Select, MenuItem,
} from '@mui/material';
import React, { useState } from 'react';
import RandomUsers from "./containers/RandomUsers"

const App = () => {
  const [page, setPage] = useState(1);
  const [resultsCount, setResultsCount] = useState(10);
  const [checked, setChecked] = useState(false);
  const [nationality, setNationality] = useState("us");
  const gender = (checked ? "Male" : "Female");

  const switchPage = (_, pageNumber) => {
    setPage(pageNumber)
  }

  const handleChangeGender = () => {
    setChecked(!checked);
  };

  const handleChangeResultsCount = (event) => {
    setResultsCount(event.target.value);
  };

  const handleChangeNation = (event) => {
    setNationality(event.target.value);
  };

  return (
    <>
      <Container>
        <Stack direction="row" spacing={1} orientation="vertical" alignItems="baseline" justifyContent="space-around">
          <FormGroup row>
            <FormControlLabel
              control={
                <Switch color="secondary"
                  checked={checked}
                  onChange={handleChangeGender} />} label={gender} />
          </FormGroup>
          <Typography
            variant="h6">
            Page: {page}
          </Typography>
          <Pagination
            size="small"
            showFirstButton
            showLastButton
            count={5}
            page={page}
            onChange={switchPage}
            variant="outlined"
            color="primary"
          />
          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="demo-simple-select-autowidth-label">Results</InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-autowidth-select"
              value={resultsCount}
              label="Results"
              onChange={handleChangeResultsCount}>
              <MenuItem value={2}>2</MenuItem><MenuItem value={4}>4</MenuItem><MenuItem value={6}>6</MenuItem>
              <MenuItem value={8}>8</MenuItem><MenuItem value={10}>10</MenuItem><MenuItem value={15}>15</MenuItem>
              <MenuItem value={20}>20</MenuItem><MenuItem value={50}>50</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="demo-simple-select-autowidth-label">Nationality</InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-autowidth-select"
              value={nationality}
              label="Nationality"
              onChange={handleChangeNation}>
              <MenuItem value={"us"}>US</MenuItem><MenuItem value={"tr"}>TR</MenuItem><MenuItem value={"ir"}>IR</MenuItem>
              <MenuItem value={"gb"}>GB</MenuItem><MenuItem value={"nz"}>NZ</MenuItem><MenuItem value={"ie"}>IE</MenuItem>
              <MenuItem value={"br"}>BR</MenuItem><MenuItem value={"nl"}>NL</MenuItem><MenuItem value={"fr"}>FR</MenuItem>
              <MenuItem value={"fi"}>FI</MenuItem><MenuItem value={"dk"}>DK</MenuItem><MenuItem value={"ch"}>CH</MenuItem>
              <MenuItem value={"es"}>ES</MenuItem><MenuItem value={"de"}>DE</MenuItem><MenuItem value={"au"}>AU</MenuItem>
            </Select>
          </FormControl>

          <FormGroup row>
            <FormControlLabel
              control={
                <Switch color="secondary"
                // checked={checked}
                // onChange={handleChangeGender} 
                />}
              label={"theme"}
              labelPlacement="top" />
            <FormControlLabel
              control={
                <Switch color="secondary"
                // checked={checked}
                // onChange={handleChangeGender} 
                />}
              label={"language"}
              labelPlacement="top" />
          </FormGroup>
        </Stack>
        <RandomUsers
          page={page}
          resultsCount={resultsCount}
          gender={gender}
          nation={nationality}
        />
      </Container>
    </>
  );
}

export default App;

/* <RadioGroup row onChange={switchGender} value={gender}>
  <FormControlLabel value="female" control={<Radio />} label="Female" />
  <FormControlLabel value="male" control={<Radio />} label="Male" />
</RadioGroup> */

  // const switchGender = (event) => {
  //   setGender(event.target.value)
  // }
