import {Box, Grid, IconButton, Typography} from "@mui/material";
import {FaGithub} from 'react-icons/fa';
import {NextLinkComposed} from "../../../lib/Link";
import {memo} from "react";

const Footer = memo(() => {
    return (
        <Box pb={1}>
            <Grid
                container
                justifyContent='center'
                alignItems='center'
                direction='column'
            >
                <Grid item>
                    <Typography
                        variant="caption"
                        color="textSecondary"
                        display='inline'
                    >
                        MIT (c) 2021 Debug Frogs
                    </Typography>
                </Grid>
                <Grid item>
                    <IconButton
                        component={NextLinkComposed}
                        to={{pathname: 'https://github.com/debug-frogs'}}
                    >
                        <FaGithub/>
                    </IconButton>
                </Grid>
            </Grid>
        </Box>
    )
})

export default Footer
