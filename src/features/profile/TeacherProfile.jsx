import React from 'react';
import {Divider, Grid, Typography} from "@mui/material";
import TeacherInfo from "./TeacherInfo";
import ButtonSignOut from "../auth/ButtonSignOut";

const TeacherProfile = () => {
    return (
        <Grid
            container
            direction='column'
            spacing={3}
        >
            <Grid item>
                <Typography style={{ fontWeight: 600 }}>
                    Teacher Profile
                </Typography>
            </Grid>
            <Grid item>
                <TeacherInfo/>
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

export default TeacherProfile
