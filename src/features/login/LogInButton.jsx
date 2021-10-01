import {Button} from "@mui/material";
import {NextLinkComposed} from "../../../lib/Link";
import React from "react";

const LogInButton = () => {
    return (
        <Button
            variant='contained'
            color='primary'
            size='small'
            component={NextLinkComposed}
            to={{pathname: '/login',}}
        >
            Login
        </Button>
    )
};

export default LogInButton;
