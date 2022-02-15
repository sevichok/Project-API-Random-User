import React, { useState, useEffect, useContext } from 'react'
import { getRandomUsers } from '../../api/getRandomUsers';
import { Container, Pagination, FormGroup, FormControlLabel, Switch, FormControl, Stack, Typography } from '@mui/material';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useModeContext } from '../../providers/ThemeProviders';

import User from '../../components/User/User';
import FormControlNationality from '../../components/FormControls/FormControlNationality';
import FormControlResults from '../../components/FormControls/FormControlResults';


const RandomUsers = () => {
    const [randomUsers, setRandomUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [resultsCount, setResultsCount] = useState(10);
    const [checked, setChecked] = useState(false);
    const [nation, setNationality] = useState("us");
    const gender = (checked ? "male" : "female");

    const { toggleColorMode } = useModeContext();

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

    useEffect(() => {
        getRandomUsers(page, resultsCount, gender, nation)
            .then(data => setRandomUsers(data.results));
    }, [page, resultsCount, gender, nation]);
    console.log(randomUsers)

    return (<>
        <Container sx={{ backgroundColor: 'background.default' }}>
            <Stack direction="row" spacing={1} orientation="vertical" alignItems="baseline" justifyContent="space-around" >
                <FormControl >
                    <FormControlLabel
                        control={
                            <Switch color="secondary"
                                checked={checked}
                                onChange={handleChangeGender} />} label={gender.substring(0, 1).toUpperCase() + gender.substring(1)} />
                </FormControl>
                <Typography
                    color="textPrimary"
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
                <FormControlResults
                    handleChangeResultsCount={handleChangeResultsCount}
                    resultsCount={resultsCount}
                />
                <FormControlNationality
                    nation={nation}
                    handleChangeNation={handleChangeNation}
                />
                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Switch color="secondary"
                                // checked={check}
                                onChange={toggleColorMode}
                            />
                        }
                        label={"theme"}
                        labelPlacement="top" />
                    <FormControlLabel
                        control={
                            <Switch color="secondary" />}
                        label={"language"}
                        labelPlacement="top" />
                </FormGroup>
            </Stack>
            <Stack sx={{ width: '100%' }}>
                <Typography color="textPrimary">Random Users</Typography>
                {randomUsers?.map((user) => <User key={user.login.uuid} {...user} />)}
            </Stack>
        </Container>
    </>)
}

export default RandomUsers


// const [picked, setPickedTheme] = useState(false);
    // const pickedThemeMode = (picked ? "dark" : "light");

    // const handleChangeTheme = () => {
    //     setPickedTheme(!picked);
    // };
    // const theme = createTheme({
    //     palette: {
    //         mode: pickedThemeMode,
    //     },
    // });