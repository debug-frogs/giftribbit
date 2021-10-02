import React from 'react';
import {Button, Divider, Grid, Typography} from "@mui/material";
import User from "./User";
import axios from "../../../lib/axios";
import Router from "next/router";
import {Logger} from "aws-amplify";

const Profile = () => {
    const handleLogout = () => {
        axios.post('/api/auth/signout')
            .then(async (res) => {
                const logger = new Logger('signup')
                logger.info(res)
                console.log(res)
                return await Router.push('/')
            })
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
