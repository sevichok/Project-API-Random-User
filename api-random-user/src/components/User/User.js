import React, { useState } from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Box, Typography, Modal } from "@mui/material"
import InfoIcon from '@mui/icons-material/Info';

function User({ ...user }) {
    const [open, setOpen] = useState(false);
    const handleOpenModal = () => setOpen(true);
    const handleCloseModal = () => setOpen(false);

    return (
        <>
            <List>
                <ListItem divider>
                    <ListItemAvatar>
                        <Avatar src={user.picture.large} />
                    </ListItemAvatar >
                    <ListItemText
                        primary={<Typography color="textPrimary">{user.name.title} {user.name.first} {user.name.last}</Typography>}
                        secondary={`${user.cell}, ${user.phone}`} />
                    <InfoIcon onClick={handleOpenModal} />
                    <Modal
                        open={open}
                        onClose={handleCloseModal}
                    >
                        <Box sx={{ p: 2, border: '1px dashed grey', color: "white", position: "absolute" }}>
                            <Typography >{user.name.title} {user.name.first} {user.name.last}</Typography>
                        </Box>
                    </Modal>
                </ListItem>
            </List>
        </>
    )
}

export default User