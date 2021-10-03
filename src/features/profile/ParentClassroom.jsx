import React, {useContext} from 'react';
import {Grid, Typography} from "@mui/material";
import {ProfileContext} from "../../pages/profile";

const ParentClassroom = () => {
    const {Teacher} = useContext(ProfileContext)

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

export default ParentClassroom;
