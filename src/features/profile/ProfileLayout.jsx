import {Fragment, memo} from 'react'
import {Box, Container, GlobalStyles, Paper} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Profile from "./Profile";

const ProfileLayout = memo(() => {
    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Fragment>
            {isSm && <GlobalStyles styles={{body: {backgroundColor: "#efe5fd"}}}/>}
            <Container
                sx={{display: { sm: 'block', xs: 'none' }}}
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
