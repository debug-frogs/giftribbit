import {Button} from "@mui/material";
import {NextLinkComposed} from "../../../lib/Link";

const SigninButton = () => {
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
};

export default SigninButton;
