import React from 'react';
import {Button} from "@mui/material";
import {NextLinkComposed} from "../../../lib/Link";

const SignIn = () => {

    return (
        <Button
            variant='contained'
            color='primary'
            size='small'
            component={NextLinkComposed}
            to={{pathname: '/',}}
        >
            Login
        </Button>
    )
};

export default SignIn;
