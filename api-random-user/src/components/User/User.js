import React, { useState } from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Box, Typography, IconButton, Dialog, Slide, Tooltip } from "@mui/material"
import InfoIcon from '@mui/icons-material/Info';
import { useLocales } from "../../providers/LocalesProvider/LocalesProviders";

function User({ ...user }) {
    const [open, setOpen] = useState(false);
    const handleOpenModal = () => setOpen(true);
    const handleCloseModal = () => setOpen(false);
    const { trans } = useLocales();

    return (
        <>
            <List>
                <ListItem divider>
                    <ListItemAvatar>
                        <Avatar src={user.picture.large} />
                    </ListItemAvatar >
                    <ListItemText
                        primary={<Typography color="textPrimary">{user.name.first} {user.name.last}</Typography>}
                        secondary={`${user.phone}`} />
                    <Tooltip title={trans.inf}>
                        <IconButton onClick={handleOpenModal}>
                            <InfoIcon />
                        </IconButton>
                    </Tooltip>
                    <Dialog
                        fullWidth
                        open={open}
                        onClose={handleCloseModal}
                        TransitionComponent={Slide}
                    >
                        <Box p={4} >
                            <img src={user.picture.large} alt={user.name.title} width="100%" height="100%" ></img>
                            <Typography variant='h4' >{user.name.first} {user.name.last}</Typography>
                            <Typography>{trans.ph}: {user.phone}</Typography>
                            <Typography>{trans.email}: {user.email}</Typography>
                            <Typography>{trans.loc}: {user.location.city}, {user.location.country}</Typography>
                        </Box>
                    </Dialog>
                </ListItem>
            </List>
        </>
    )
}

export default User