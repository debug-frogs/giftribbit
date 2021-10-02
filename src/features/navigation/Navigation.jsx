import {AppBar, Grid, Toolbar} from "@mui/material";
import LogInButton from "../login/LogInButton";
import {selectIsAuthorized} from "../authorized/authorizedSlice";
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
                        { isAuthorized ?  <ProfileButton /> : <LogInButton/>}
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation
