import {NextLinkComposed} from "../../../lib/Link";
import {IconButton} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const ProfileButton = () => {
    return (
        <IconButton
            color='secondary'
            component={NextLinkComposed}
            to={{pathname: '/profile',}}
        >
            <AccountCircleIcon/>
        </IconButton>
    );
};

export default ProfileButton;
