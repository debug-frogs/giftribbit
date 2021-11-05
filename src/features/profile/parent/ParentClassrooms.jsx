import {memo, useContext} from 'react';
import {Divider, Grid, IconButton, Typography} from "@mui/material";
import {ProfileContext} from "../../../pages/profile";
import {NextLinkComposed} from "../../../../lib/Link";
import {FaExternalLinkSquareAlt} from "react-icons/fa";


const ParentClassrooms = memo(() => {
    const [profile] = useContext(ProfileContext)

    if (profile.Classrooms.length) {
        return (
            <Grid
                container
                direction='column'
                spacing={2}
            >
                {profile.Classrooms.map(classroom =>
                    <Grid item>
                        <Grid
                            container
                            direction='column'
                            spacing={1}
                        >
                            <Grid item>
                                <Divider />
                            </Grid>
                            <Grid item>
                                <Typography
                                    noLinkStyle
                                    style={{textDecoration: "none", fontWeight: 600}}
                                    color='secondary'
                                    component={NextLinkComposed}
                                    to={{pathname: '/classroom/' + classroom.id}}
                                >
                                    {classroom.Teacher.first_name} {classroom.Teacher.last_name}'s Classroom
                                </Typography>
                                <br />
                                {profile.Classrooms.length > 0 &&
                                    <Typography
                                        variant='caption'
                                    >
                                        at {classroom.Teacher.school}
                                    </Typography>
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                )}
            </Grid>
        )
    }
    else {
        return null
    }
})

export default ParentClassrooms;
