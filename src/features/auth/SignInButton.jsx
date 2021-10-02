import {Button} from "@mui/material";
import {NextLinkComposed} from "../../../lib/Link";
import React from "react";

const SignInButton = () => {
    return (
        <Button
            variant='contained'
            color='primary'
            size='small'
            component={NextLinkComposed}
            to={{pathname: '/signin',}}
        >
            Login
        </Button>
    )
};

export default SignInButton;
