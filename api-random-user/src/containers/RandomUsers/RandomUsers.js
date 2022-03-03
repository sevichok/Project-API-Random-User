import React, { useState, useEffect } from 'react'
import { getRandomUsers } from '../../api/getRandomUsers';
import { Container, Pagination, FormGroup, Switch, Stack, Typography, Grid } from '@mui/material';
import { useTheme } from '../../providers/ThemeProvider/ThemeProviders';
import { useLocales } from '../../providers/LocalesProvider/LocalesProviders';

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
    const { trans, toggleLang } = useLocales();

    const switchPage = (_, pageNumber) => {
        setPage(pageNumber)
    }
    const handleChangeGender = () => {
        setChecked((prev) => !prev);
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
    console.log(randomUsers);

    return (<>
        <Container maxWidth="lg" sx={{ borderRadius: 2, }}>
            <Grid container direction="row" spacing={0.5} orientation="vertical" alignItems="center" justifyContent="space-around" >
                <Grid item xs={1}>
                    <FormGroup sx={{ display: 'inline', }}>
                        <Typography color="textPrimary">{trans[gender]}</Typography>
                        <Switch color="secondary" checked={checked} onChange={handleChangeGender} />
                    </FormGroup>
                </Grid>
                <Grid item xs={1}>
                    <Typography color="textPrimary">{trans.page}: {page}</Typography>
                </Grid>
                <Grid item xs={3}>
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
                </Grid>
                <Grid item xs={2}>
                    <FormControlResults
                        handleChangeResultsCount={handleChangeResultsCount}
                        resultsCount={resultsCount}
                    />
                </Grid>
                <Grid item xs={2}>
                    <FormControlNationality
                        nation={nation}
                        handleChangeNation={handleChangeNation}
                    />
                </Grid>
                <Grid item xs={2}>
                    <FormGroup row sx={{ gap: 3 }}>
                        <FormGroup row sx={{ display: 'inline', }}>
                            <Typography color="textPrimary">{trans.th}</Typography>
                            <Switch color="secondary" onChange={toggleTheme} />
                        </FormGroup>
                        <FormGroup row sx={{ display: 'inline', }}>
                            <Typography color="textPrimary">{trans.lang}</Typography>
                            <Switch color="secondary" onChange={toggleLang} />
                        </FormGroup>
                    </FormGroup>
                </Grid>
            </Grid>
            <Stack sx={{ width: '100%', pt: 3, }}>
                <Typography color="textPrimary">{trans.users}</Typography>
                {randomUsers?.map((user) => <User key={user.login.uuid} {...user} />)}
            </Stack>
        </Container>
    </>)
}

export default RandomUsers