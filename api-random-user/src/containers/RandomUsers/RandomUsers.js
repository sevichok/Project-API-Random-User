import React, { useState, useEffect } from 'react'
import { getRandomUsers } from '../../api/getRandomUsers';
import { Container, Pagination, FormGroup, FormControlLabel, Switch, FormControl, Stack, Typography } from '@mui/material';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useTheme } from '../../providers/ThemeProviders';

import User from '../../components/User/User';
import FormControlNationality from '../../components/FormControls/FormControlNationality';
import FormControlResults from '../../components/FormControls/FormControlResults';


const RandomUsers = () => {
    const [randomUsers, setRandomUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [resultsCount, setResultsCount] = useState(4);
    const [checked, setChecked] = useState(false);
    const [nation, setNationality] = useState("us");
    const gender = (checked ? "male" : "female");

    const { toggleTheme } = useTheme();

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
        <Container sx={{ backgroundColor: 'background.default', pt: 3, borderRadius: 2, }}>
            <Stack direction="row" spacing={1} orientation="vertical" alignItems="center" justifyContent="space-around" >
                <FormGroup sx={{ display: 'inline', }}>
                    <Typography color="textPrimary">{gender.substring(0, 1).toUpperCase() + gender.substring(1)}</Typography>
                    <Switch color="secondary" checked={checked} onChange={handleChangeGender} />
                </FormGroup>
                <Typography
                    color="textPrimary">
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
                <FormGroup row sx={{ gap: 2 }}>
                    <FormGroup row sx={{ display: 'inline', }}>
                        <Typography color="textPrimary">Theme</Typography>
                        <Switch color="secondary" onChange={toggleTheme} />
                    </FormGroup>
                    <FormGroup row sx={{ display: 'inline', }}>
                        <Typography color="textPrimary">Language</Typography>
                        <Switch color="secondary" />
                    </FormGroup>
                </FormGroup>
            </Stack>
            <Stack sx={{ width: '100%', pt: 3, }}>
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