import {Button} from "@mui/material";
import {NextLinkComposed} from "../../../lib/Link";
import {memo} from "react";

const LoginButton = memo(() => {
    return (
        <Button
            variant='outlined'
            color='secondary'
            size='small'
            component={NextLinkComposed}
            to={{pathname: '/signin',}}
        >
            Login
        </Button>
    )
})

export default LoginButton;
