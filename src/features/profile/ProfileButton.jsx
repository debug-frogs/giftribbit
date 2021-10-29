import {NextLinkComposed} from "../../../lib/Link";
import {IconButton} from "@mui/material";
import {FaUserCircle} from "react-icons/fa";

const ProfileButton = () => {
    return (
        <IconButton
            color='secondary'
            component={NextLinkComposed}
            to={{pathname: '/profile',}}
        >
            <FaUserCircle/>
        </IconButton>
    );
};

export default ProfileButton;
