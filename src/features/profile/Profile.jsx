import React from 'react';
import {Box, Button, Divider, Grid, Paper, Typography} from "@mui/material";
import User from "./User";
import axios from "../../../lib/axios";
import Router from "next/router";
import {Auth} from "aws-amplify";

const Profile = () => {
    const handleLogout = () => {
        axios.post('/api/auth/signout')
            .then(async (res) => await Router.push('/'))
    }

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
                <User/>
            </Grid>
            <Grid item>
                <Divider />
            </Grid>
            <Grid item>
                <Button
                    fullWidth
                    variant='contained'
                    onClick={handleLogout}
                >
                    Logout
                </Button>
            </Grid>
        </Grid>
    )
};

export default Profile
