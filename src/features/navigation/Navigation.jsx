import {AppBar, Grid, Toolbar} from "@mui/material";
import LoginButton from "./LoginButton";
import {selectIsAuthorized} from "../auth/authSlice";
import {useSelector} from "react-redux";
import ProfileButton from "./ProfileButton";
import {memo} from "react";

const Navigation = memo(() => {
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
                        { isAuthorized ?  <ProfileButton /> : <LoginButton/>}
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
})

export default Navigation
