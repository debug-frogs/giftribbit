import React from 'react';
import {Divider, Grid, Typography} from "@mui/material";
import UserInfo from "./UserInfo";
import ButtonSignOut from "../auth/ButtonSignOut";

const Profile = () => {
    return (
        <Grid
            container
            direction='column'
            spacing={3}
        >
            <Grid item>
                <Typography style={{ fontWeight: 600 }}>
                    Profile
                </Typography>
            </Grid>
            <Grid item>
                <UserInfo/>
            </Grid>
            <Grid item>
                <Divider />
            </Grid>
            <Grid item>
                <ButtonSignOut />
            </Grid>
        </Grid>
    )
};

export default Profile
