import React, {useContext} from 'react';
import {Grid, Typography} from "@mui/material";
import {ProfileContext} from "../../pages/profile";

const TeacherInfo = () => {
    const userAttributes = useContext(ProfileContext)

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
                            {userAttributes?.first_name}
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
                            {userAttributes?.last_name}
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
                            {userAttributes?.email}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default TeacherInfo;
