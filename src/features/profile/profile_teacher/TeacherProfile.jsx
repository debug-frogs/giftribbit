import React from 'react';
import {Divider, Grid, Typography} from "@mui/material";
import TeacherInformation from "./TeacherInformation";
import SignoutButton from "../../auth/SignoutButton";
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
                <SignoutButton />
            </Grid>
        </Grid>
    )
};

export default TeacherProfile
