import React from 'react';
import {Divider, Grid, IconButton, Typography} from "@mui/material";
import TeacherInfo from "./TeacherInfo";
import ButtonSignOut from "../auth/ButtonSignOut";
import TeacherListOfParents from "./TeacherListOfParents";
import {FaUserPlus, FaUserMinus} from 'react-icons/fa'

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
                <Typography style={{ fontWeight: 600 }}>
                    Classroom
                </Typography>
            </Grid>
            <Grid item>
                <Divider />
            </Grid>
            <Grid item>
                <Grid
                    container
                    alignItems='center'
                    spacing={3}
                >
                    <Grid item>
                        <Typography style={{ fontWeight: 600 }}>
                            Parents
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Grid
                            container
                            spacing={1}
                        >
                            <Grid item>
                                <IconButton
                                    color='secondary'
                                    size='small'
                                >
                                    <FaUserPlus />
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <IconButton
                                    color='secondary'
                                    size='small'
                                >
                                    <FaUserMinus />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <TeacherListOfParents />
            </Grid>
            <Grid item>
                <ButtonSignOut />
            </Grid>
        </Grid>
    )
};

export default TeacherProfile
