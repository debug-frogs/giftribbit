import {memo, useContext} from 'react';
import {Divider, Grid, Typography} from "@mui/material";
import {ProfileContext} from "../../../pages/profile";
import Link from "../../../../lib/Link";
import hash from "object-hash";


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
                    <Grid
                        key={hash(classroom)}
                        item
                    >
                        <Grid
                            container
                            direction='column'
                            spacing={1}
                        >
                            <Grid item>
                                <Divider />
                            </Grid>
                            <Grid item>
                                <Link
                                    style={{fontWeight: 600}}
                                    underline='none'
                                    color='secondary'
                                    href={'/classroom/' + classroom.id}
                                >
                                    {classroom.Teacher.first_name} {classroom.Teacher.last_name}'s Classroom
                                </Link>
                                <br />
                                <Typography
                                    variant='body2'
                                >
                                    at {classroom.Teacher.school}
                                </Typography>
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
