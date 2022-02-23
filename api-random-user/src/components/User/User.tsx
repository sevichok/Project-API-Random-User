import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Box,
  Typography,
  IconButton,
  Dialog,
  Slide,
  Tooltip,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { useLocales } from "../../providers/LocalesProvider/LocalesProviders";
import { UserProps } from "./User.Types";

const User: React.FC<UserProps> = ({
  picture,
  name,
  phone,
  email,
  location,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);
  const { trans } = useLocales();

  return (
    <>
      <List>
        <ListItem divider>
          <ListItemAvatar>
            <Avatar src={picture.large} />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography color="textPrimary">
                {name.first} {name.last}
              </Typography>
            }
            secondary={`${phone}`}
          />
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
            <Box p={4}>
              <img
                src={picture.large}
                alt={name.title}
                width="100%"
                height="100%"
              ></img>
              <Typography variant="h4">
                {name.first} {name.last}
              </Typography>
              <Typography>
                {trans.ph}: {phone}
              </Typography>
              <Typography>
                {trans.email}: {email}
              </Typography>
              <Typography>
                {trans.loc}: {location.city}, {location.country}
              </Typography>
            </Box>
          </Dialog>
        </ListItem>
      </List>
    </>
  );
};

export default User;
