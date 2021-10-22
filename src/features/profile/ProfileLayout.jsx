import React from 'react';
import {Box, Container, Paper} from "@mui/material";
import Profile from "./Profile";

const ProfileLayout = () => {
    return (
        <React.Fragment>
            <Container
                sx={{ display: { sm: 'block', xs: 'none' } }}
                maxWidth='xs'
            >
                <Paper>
                    <Box p={3}>
                        <Profile />
                    </Box>
                </Paper>
            </Container>
            <Container
                sx={{ display: { sm: 'none', xs: 'block' } }}
                maxWidth='xs'
            >
                <Profile />
            </Container>
        </React.Fragment>
    );
};

export default ProfileLayout;
