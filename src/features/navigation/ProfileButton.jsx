import {NextLinkComposed} from "../../../lib/Link";
import {IconButton} from "@mui/material";
import {FaUserCircle} from "react-icons/fa";
import {memo} from "react";

const ProfileButton = memo(() => {
    return (
        <IconButton
            color='secondary'
            component={NextLinkComposed}
            to={{pathname: '/profile',}}
        >
            <FaUserCircle/>
        </IconButton>
    )
})

export default ProfileButton;
