import React from 'react';
import {Divider, Grid, Typography} from "@mui/material";
import TeacherInformation from "./TeacherInformation";
import ButtonSignOut from "../../auth/ButtonSignOut";
import ParentsList from "./ParentsList";
import AddParent from "./AddParent";

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
                <TeacherInformation/>
            </Grid>
            <Grid item>
                <Divider />
            </Grid>
            <Grid item>
                <AddParent />
                <ParentsList />
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
