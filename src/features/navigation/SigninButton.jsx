import {Button} from "@mui/material";
import {NextLinkComposed} from "../../../lib/Link";
import {memo} from "react";

const SigninButton = memo(() => {
    return (
        <Button
            variant='contained'
            color='secondary'
            size='small'
            component={NextLinkComposed}
            to={{pathname: '/signin',}}
        >
            Login
        </Button>
    )
})

export default SigninButton;
