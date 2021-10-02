import {AppBar, Grid, Toolbar} from "@mui/material";
import SignInButton from "../auth/SignInButton";
import {selectIsAuthorized} from "../auth/authSlice";
import {useSelector} from "react-redux";
import ProfileButton from "../profile/ProfileButton";

const Navigation = () => {
    const isAuthorized = useSelector(selectIsAuthorized)

    return (
        <AppBar
            position='static'
            color='transparent'
            elevation={0}
        >
            <Toolbar>
                <Grid
                    container
                    justifyContent='space-between'
                    alignItems='center'
                    wrap='nowrap'
                >
                    <Grid item/>
                    <Grid item >
                        { isAuthorized ?  <ProfileButton /> : <SignInButton/>}
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation
