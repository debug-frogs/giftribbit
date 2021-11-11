import {Fragment, memo} from 'react'
import {Box, Container, Paper} from "@mui/material";
import Profile from "./Profile";

const ProfileLayout = memo(() => {
    return (
        <Fragment>
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
        </Fragment>
    )
})

export default ProfileLayout;
