import React, {useContext, useEffect, useState} from 'react';
import {Grid, Typography} from "@mui/material";
import {ProfileContext} from "../../../pages/profile";


const Classroom = () => {
    const [profile] = useContext(ProfileContext)
    const {Teacher} = profile

    return (
        <Grid
            container
            direction='column'
            spacing={2}
        >
            <Grid item>
                <Typography style={{ fontWeight: 600 }}>
                    Classroom
                </Typography>
            </Grid>
            <Grid item>
                <Typography>
                    {Teacher?.first_name}&nbsp;{Teacher?.last_name}
                </Typography>
            </Grid>
        </Grid>

    );
};

export default Classroom;
