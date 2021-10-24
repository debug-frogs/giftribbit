import React, {useContext} from 'react';
import {Grid, Typography} from "@mui/material";
import {ProfileContext} from "../../../pages/profile";

const TeacherInfo = () => {
    const [profile] = useContext(ProfileContext)
    const {first_name, last_name, email, child} = profile

    return (
        <Grid
            container
            direction='column'
            justifyContent='center'
            spacing={2}
        >
            <Grid item>
                <Grid
                    container
                    spacing={1}
                    alignItems='center'
                >
                    <Grid item>
                        <Typography
                            display='inline'
                        >
                            First name:
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            display='inline'
                        >
                            {first_name}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid
                    container
                    spacing={1}
                    alignItems='center'
                >
                    <Grid item>
                        <Typography
                            display='inline'
                        >
                            Last name:
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            display='inline'
                        >
                            {last_name}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid
                    container
                    spacing={1}
                    alignItems='center'
                >
                    <Grid item>
                        <Typography
                            display='inline'
                        >
                            Email:
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            display='inline'
                        >
                            {email}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid
                    container
                    spacing={1}
                    alignItems='center'
                >
                    <Grid item>
                        <Typography
                            display='inline'
                        >
                            Parent of:
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            display='inline'
                        >
                            {child}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default TeacherInfo;
