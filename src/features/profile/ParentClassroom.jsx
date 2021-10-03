import React, {useContext, useEffect, useState} from 'react';
import {Grid, Typography} from "@mui/material";
import {DataStore} from "aws-amplify";
import {Teacher} from "../../models";
import {ProfileContext} from "../../pages/profile";

const ParentClassroom = () => {
    const {teacherID} = useContext(ProfileContext)
    const [teacher, setTeacher] = useState({})

    useEffect(async () => {
        /* get the teacher details from Data */
        const teacher = (await DataStore.query(Teacher)).find(c => c.id === teacherID)
        setTeacher(teacher)
    }, []);

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
                    {teacher?.first_name}&nbsp;{teacher?.last_name}
                </Typography>
            </Grid>
        </Grid>

    );
};

export default ParentClassroom;
