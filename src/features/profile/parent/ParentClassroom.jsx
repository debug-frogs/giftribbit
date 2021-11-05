import {memo, useContext} from 'react';
import {Grid, IconButton, Typography} from "@mui/material";
import {ProfileContext} from "../../../pages/profile";
import {NextLinkComposed} from "../../../../lib/Link";
import {FaExternalLinkAlt} from "react-icons/fa";


const ParentClassroom = memo(() => {
    const [profile] = useContext(ProfileContext)
    const {classroomID, Teacher} = profile

    if (Teacher && classroomID) {
        return (
            <Grid
                container
                direction='column'
                spacing={2}
            >
                <Grid item>
                    <Grid
                        container
                        wrap='nowrap'
                        spacing={2}
                        alignItems='center'
                    >
                        <Grid item>
                            <Typography
                                style={{fontWeight: 600}}
                            >
                                Classroom
                            </Typography>
                        </Grid>
                        <Grid item>
                            <IconButton
                                size='small'
                                color='secondary'
                                component={NextLinkComposed}
                                to={{pathname: '/classroom/' + classroomID}}
                            >
                                <FaExternalLinkAlt/>
                            </IconButton>
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
                                Teacher:
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography
                                display='inline'
                                variant='body2'
                            >
                                {Teacher.first_name}&nbsp;{Teacher.last_name}
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
                                {Teacher.school}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
    else {
        return null
    }
})

export default ParentClassroom;
