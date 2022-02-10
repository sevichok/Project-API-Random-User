import React, { useState, useEffect } from 'react'
// import User from '../../components/User';
import { List, ListItem, ListItemText, Box, Pagination, Typography } from "@mui/material"
import InfoIcon from '@mui/icons-material/Info';
import { getRandomUsers } from '../../api/getRandomUsers';

const RandomUsers = () => {
    const [randomUsers, setRandomUsers] = useState([]);
    const [resultsCount, setResultsCount] = useState(5);
    const [page, setPage] = useState(1);

    const switchPage = (event, pageNumber) => {
        setPage(pageNumber)
    }

    useEffect(() => {
        getRandomUsers(page, resultsCount)
            .then(data => setRandomUsers(data.results));

    }, [page, resultsCount]);

    console.log(randomUsers)

    return (
        <>
            <h2>random users</h2>
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'silver' }}>
                <Typography variant="h6">Page:{page} </Typography>
                <Pagination
                    showFirstButton
                    showLastButton
                    count={5}
                    page={page}
                    onChange={switchPage}
                    variant="outlined"
                    color="primary"
                    shape="rounded"
                />
                <List>
                    {randomUsers.map((user, index) =>
                        <ListItem key={index}>
                            <ListItemText
                                primary={`${user.name.title} ${user.name.first} ${user.name.last}`}
                                secondary={`${user.cell}, ${user.phone}`} />
                            <InfoIcon />
                        </ListItem>)}
                </List>
            </Box>
        </>
    )
}

export default RandomUsers