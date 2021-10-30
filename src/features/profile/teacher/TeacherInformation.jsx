import {useContext} from 'react';
import {Grid, Typography} from "@mui/material";
import {ProfileContext} from "../../../pages/profile";

const TeacherInformation = () => {
    const [profile] = useContext(ProfileContext)
    const {first_name, last_name, email, school} = profile

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
                            variant='body2'
                            color='textSecondary'
                            style={{ fontWeight: 600 }}
                        >
                            First name:
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            display='inline'
                            variant='body2'
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
                            variant='body2'
                            color='textSecondary'
                            style={{ fontWeight: 600 }}
                        >
                            Last name:
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            display='inline'
                            variant='body2'
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
                            variant='body2'
                            color='textSecondary'
                            style={{ fontWeight: 600 }}
                        >
                            Email:
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            display='inline'
                            variant='body2'
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
                            variant='body2'
                            color='textSecondary'
                            style={{ fontWeight: 600 }}
                        >
                            School:
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            display='inline'
                            variant='body2'
                        >
                            {school}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default TeacherInformation;
