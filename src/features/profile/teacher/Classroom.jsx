import React, {useContext, useEffect, useState} from 'react';
import {Button, Grid, Icon, IconButton, Typography} from "@mui/material";
import {ProfileContext} from "../../../pages/profile";
import {NextLinkComposed} from "../../../../lib/Link";
import {FaExternalLinkAlt} from "react-icons/fa";


const Classroom = () => {
    const [profile] = useContext(ProfileContext)
    const {classroomID} = profile

    return (
        <Grid
            container
            direction='column'
            spacing={2}
        >
            <Grid item>
                <Button
                    component={NextLinkComposed}
                    to={{pathname: '/classroom/' + classroomID}}
                >
                    <Grid
                        container
                        wrap='nowrap'
                        spacing={1}
                        alignItems='center'
                    >
                        <Grid item>
                            <Typography
                                style={{ fontWeight: 600 }}
                            >
                                Classroom
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Icon fontSize='sm'>
                                <FaExternalLinkAlt />
                            </Icon>
                        </Grid>
                    </Grid>
                </Button>
            </Grid>
        </Grid>
    );
};

export default Classroom;
