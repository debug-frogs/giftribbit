import React from 'react';
import {Divider, Grid, Typography} from "@mui/material";
import SignoutButton from "../../auth/SignoutButton";
import ParentInfo from "./ParentInformation";
import Classroom from './Classroom'

const ParentProfile = () => {
    return (
        <Grid
            container
            direction='column'
            spacing={3}
        >
            <Grid item>
                <Typography style={{ fontWeight: 600 }}>
                    Parent Profile
                </Typography>
            </Grid>
            <Grid item>
                <ParentInfo/>
            </Grid>
            <Grid item>
                <Divider />
            </Grid>
            <Grid item>
                <Classroom />
            </Grid>
            <Grid item>
                <Divider />
            </Grid>
            <Grid item>
                <SignoutButton />
            </Grid>
        </Grid>
    );
};

export default ParentProfile;
