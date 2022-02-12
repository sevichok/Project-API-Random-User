import React, { useState, useEffect } from 'react'
// import User from '../../components/User';
import { List, ListItem, ListItemText, Stack, LinearProgress, Divider } from "@mui/material"
import InfoIcon from '@mui/icons-material/Info';
import { getRandomUsers } from '../../api/getRandomUsers';

const RandomUsers = ({ page, resultsCount, gender, nation }) => {
    const [randomUsers, setRandomUsers] = useState([]);

    useEffect(() => {
        getRandomUsers(page, resultsCount, gender, nation)
            .then(data => setRandomUsers(data.results));

    }, [page, resultsCount, gender, nation]);
    console.log(randomUsers)

    return (
        <>
            <h2>Random Users</h2>
            <Stack
                sx={{ width: '100%', bgcolor: 'white' }}
                divider={<Divider orientation="horizontal" variant='fullWidth' />}
            >
                <List maxWidth>
                    {/* <LinearProgress /> */}
                    {randomUsers.map((user, index) =>
                        <ListItem key={index} maxWidth>
                            <ListItemText
                                primary={`${user.name.title} ${user.name.first} ${user.name.last}`}
                                secondary={`${user.cell}, ${user.phone}`} />
                            <InfoIcon />
                        </ListItem>)}
                </List>
            </Stack>
        </>
    )
}

export default RandomUsers