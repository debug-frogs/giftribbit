import React, {useContext} from 'react';
import {Grid, Typography} from "@mui/material";
import {ProfileContext} from "../../pages/profile";

const UserInfo = () => {
    const userAttributes = useContext(ProfileContext);

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
                            email:
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
                            sub:
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            display='inline'
                        >
                            {userAttributes?.sub}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    );
};

export default UserInfo;
