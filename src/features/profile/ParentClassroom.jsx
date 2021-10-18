import React, {useContext, useEffect, useState} from 'react';
import {Grid, Typography} from "@mui/material";
import {ProfileContext} from "../../pages/profile";
import {DataStore} from "aws-amplify";
import {Teacher} from "../../models";

const ParentClassroom = () => {
    const {teacherID} = useContext(ProfileContext)
    const [teacher, setTeacher] = useState({})

    useEffect(async () => {
        const teacher = await DataStore.query(Teacher, teacherID);
        setTeacher(teacher)
    },[])

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
