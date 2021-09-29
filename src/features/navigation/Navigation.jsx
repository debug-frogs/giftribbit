import React from 'react';
import {AppBar, Grid, Toolbar} from "@mui/material";
import SignIn from "../signin/SignIn";

const Navigation = () => {

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
                    <Grid item />
                    <Grid item>
                        <SignIn/>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation
