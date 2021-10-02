import {Box, Button} from "@mui/material";
import {NextLinkComposed} from "../../../lib/Link";
import React from "react";

const LogInButton = () => {
    return (
        <Button
            variant='contained'
            color='primary'
            size='small'
            component={NextLinkComposed}
            to={{pathname: '/signup',}}
        >
            <Box px={3}>
                Signup
            </Box>
        </Button>
    )
};

export default LogInButton;
