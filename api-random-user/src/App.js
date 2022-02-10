import { Stack, Container, TextField } from '@mui/material';
import React from 'react';
import RandomUsers from "./containers/RandomUsers"

const App = () => {
  return (
    <>
      <Container>
        <TextField
          fullWidth
          label="something"
        // value={ }
        // onChange={e => e.target.value}
        />
        <Stack spacing={2}>
          <RandomUsers />
        </Stack>
      </Container>
    </>
  );
}

export default App;
